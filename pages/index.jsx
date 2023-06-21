import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
        <link rel="icon" href="/travel-icon.png" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// to load data before rendering the page
export async function getStaticProps() {
  // fetch data from an API
  // fetch('/api/meetups'); // we could do this...
  const url = process.env.DATABASE_URL;

  const client = await MongoClient.connect(`mongodb+srv://jobecamera:${url}@cluster0.hi4yca3.mongodb.net/meetups?retryWrites=true&w=majority`);
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
    revalidate: 1, // X seconds to revalidate outdated data
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
