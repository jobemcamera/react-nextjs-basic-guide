// our-domain.com/new-meetup
import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();

  async function addMeetUpHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/"); // return to the Home page
  }

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
        <link rel="icon" href="/travel-icon.png" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
