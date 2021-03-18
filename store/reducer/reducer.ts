import { actionTypes, GET_ARTIST, SEARCH } from "../action/types";

interface initial {
  artists: (
    | {
        type: "artist";
      }
    | undefined
  )[];
  labels: {
    type: "label";
  }[];
  artist: [];
}

const initial: initial = {
  artists: [],
  labels: [],
  artist: [],
};

export default (state = initial, action: actionTypes): initial => {
  switch (action.type) {
    case SEARCH:
    // const artists = action.artist.results.map(
    //   (result: { type: "artist" }) => {
    //     if (result.type === "artist") {
    //       return result;
    //     }
    //   }
    // );
    // const labels = action.artist.results.map(
    //   (result: { type: String }) => result.type === "labels"
    // );

    // return {
    //   artists: artists,
    //   labels: labels,
    // };

    case GET_ARTIST:
      return {
        ...state,
        artist: action.artist,
      };
  }

  return state;
};
