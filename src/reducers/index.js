import { combineReducers } from "redux";
import { selectSong } from "../actions";
const songReducer = () => {
  return [
    { title: "closer", duration: "02:30" },
    { title: "Timro Pratiksa", duration: "03:30" },
    { title: "criminal", duration: "05:06" },
    { title: "iktara", duration: "03:09" },
    { title: "hawayein", duration: "04:12" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  //we are gonna inspect its type, if its type is selected_song, we are gonna return its payload property
  if (action.type === "SONG_SELECTED") {
    //here only action type is song_selected, we didnt actually require if statement
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
