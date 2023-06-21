import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Malta",
    image:
      "https://www.eurodicas.com.br/wp-content/uploads/2018/08/tudo-sobre-malta-1.jpg",
    address: "Valeta",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "Albania",
    image:
      "https://travellingbalkans.com/wp-content/uploads/2019/09/DJI_0853-HDR-1150x862.jpg",
    address: "Tirana",
    description: "This is the second meetup",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS)
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
