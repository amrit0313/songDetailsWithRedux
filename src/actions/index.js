//Action creator
export const selectSong = (song) => {
  // used export with function here, coz we can export many functions through it(and here we dont use default)
  //return action
  return {
    type: "SONG_SELECTED",
    payload: song, // to specify what song we have selected
  };
};
