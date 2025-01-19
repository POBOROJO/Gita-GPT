import React from "react";
import flute from "../assets/images/flute.png";
import musicalNotes from "../assets/images/musical_notes.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={flute} alt="flute" className="loading-images" />
      <img src={musicalNotes} alt="musical notes" className="loading-images" />
    </div>
  );
};

export default Loading;
