import {
  actionTypes,
  RECEIVE_RELEASES,
  RECEIVE_ARTIST,
  RECEIVE_SEARCH,
  RECEIVE_RELEASE_DATA,
} from "../action/types";
import { ImageSourcePropType } from "react-native";

interface initial {
  artists: {
    type: String;
    id: number;
    cover_image: ImageSourcePropType;
    title: String;
    genre: String;
    style: String;
  }[];
  labels: ({ type: "label" } | undefined)[];
  artist: {};
  releases: [];
  release: {};
}

const initial: initial = {
  artists: [],
  labels: [],
  artist: {},
  releases: [],
  release: {},
};

export default (state = initial, action: actionTypes): initial => {
  switch (action.type) {
    //search array objects
    case RECEIVE_SEARCH:
      if (!action.data.length) {
        return state;
      }
      const artists = action.data
        .filter((result) => result.type === "artist")
        .map((result) => result);
      const labels = action.data.map((result: { type: "label" }) => {
        if (result.type === "label") {
          return result;
        }
      });

      return {
        ...state,
        artists: artists,
        labels: labels,
      };

    //artist profile data
    case RECEIVE_ARTIST:
      return {
        ...state,
        artist: action.data,
      };

    //artist releases array
    case RECEIVE_RELEASES:
      return {
        ...state,
        releases: action.data,
      };

    //a release data
    case RECEIVE_RELEASE_DATA:
      return {
        ...state,
        release: action.data,
      };
  }

  return state;
};
