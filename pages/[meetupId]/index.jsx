import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

// add all of id's in data
export async function getStaticPaths() {
  return {
    fallback: false, // to indicate that I defined all supported paths here
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId; // [meetupId]

  return {
    props: {
      meetupData: {
        id: "m1",
        image:
          "https://www.eurodicas.com.br/wp-content/uploads/2018/08/tudo-sobre-malta-1.jpg",
        title: "Malta",
        address: "Valeta",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
