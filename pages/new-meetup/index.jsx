// our-domain.com/new-meetup
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
  const router = useRouter();

  async function addMeetUpHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/'); // return to the Home page
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
  )
}

export default NewMeetupPage;