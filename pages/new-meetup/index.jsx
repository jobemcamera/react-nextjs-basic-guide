// our-domain.com/new-meetup
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  const addMeetUpHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }

  return (
    <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
  )
}

export default NewMeetupPage;