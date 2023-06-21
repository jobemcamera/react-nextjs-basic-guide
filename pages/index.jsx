import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// to load data before rendering the page
export async function getStaticProps() {
  // fetch data from an API
  // fetch('/api/meetups'); // we could do this...
  const url = process.env.DATABASE_URL;

  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // X seconds to revalidate outdated data
  };
}

// an alternative to getStaticProps
// it's running for every incoming requests (to many requests per second)
// export async function getServerSideProps(context) {
//   const req = context.req; // for authentication
//   const res = context.res; // for authentication
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export default HomePage;
