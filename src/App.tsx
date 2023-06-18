import React from "react";
import Timeline from "timelinejs-react";

const events: Slide[] = [
  {
    start_date: {
      year: 2021,
      month: 6,
      day: 5
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: ""
    },
    end_date: {
      year: 2021,
      month: 7,
      day: 4
    },
    unique_id: "1",
    text: {
      headline: "Event1",
      text: ""
    },
    group: "Catégorie1",
    background: {}
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: ""
    },
    end_date: {
      year: 2021,
      month: 9,
      day: 5
    },
    unique_id: "2",
    text: {
      headline: "Event2",
      text: ""
    },
    group: "Catégorie1",
    background: {}
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: ""
    },
    end_date: {
      year: 2021,
      month: 8,
      day: 5
    },
    unique_id: "3",
    text: {
      headline: "Event3",
      text: ""
    },
    group: "Catégorie2",
    background: {}
  }
];

const MyComponent: React.FC = () => {
  return (
    <Timeline
      target={<div className="timeline-test" style={{ height: 600 }} />}
      events={events}
      options={{
        timenav_position: "top",
        hash_bookmark: true,
        initial_zoom: 1,
        scale_factor: 1,
        debug: true,
        default_bg_color: { r: 0, g: 0, b: 0 }
      }} // optional
    />
  );
};

export default MyComponent;
