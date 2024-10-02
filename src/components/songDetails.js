import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <div>Select a song</div>;

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
