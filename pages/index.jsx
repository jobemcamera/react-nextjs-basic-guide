import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Malta',
    image: 'https://www.eurodicas.com.br/wp-content/uploads/2018/08/tudo-sobre-malta-1.jpg',
    adrres: 'Valeta',
    description: 'This is the first meetup'
  },
  {
    id: 'm2',
    title: 'Albania',
    image: 'https://travellingbalkans.com/wp-content/uploads/2019/09/DJI_0853-HDR-1150x862.jpg',
    adrres: 'Tirana',
    description: 'This is the second meetup'
  }
]

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}/>;
};

export default HomePage;
