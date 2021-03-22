import { actionTypes, GET_ARTIST, RECEIVE_SEARCH } from "../action/types";
import { ImageSourcePropType } from "react-native";

interface initial {
  artists: {
    type: "artist";
    id: number;
    thumb: ImageSourcePropType;
    title: String;
    genre: String;
    style: String;
  }[];
  labels: ({ type: "label" } | undefined)[];
  artist: [];
}

const initial: initial = {
  artists: [],
  labels: [],
  artist: [],
  releases: [],
};

export default (state = initial, action: actionTypes): initial => {
  switch (action.type) {
    case RECEIVE_SEARCH:
      const artists = action.data?.map((result: { type: "artist" }) => {
        if (result.type === "artist") {
          return result;
        }
      });
      const labels = action.data?.map((result: { type: "label" }) => {
        if (result.type === "label") {
          return result;
        }
      });

    // return {
    //   ...state,
    //   artists: artists,
    //   labels: labels,
    // };

    case GET_ARTIST:
      return {
        ...state,
        artist: action.data,
      };
  }

  return state;
};
