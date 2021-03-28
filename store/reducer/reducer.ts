import {
  actionTypes,
  RECEIVE_RELEASES,
  RECEIVE_ARTIST,
  RECEIVE_SEARCH,
  RECEIVE_RELEASE_DATA,
} from "../action/types";
import { ImageURISource } from "react-native";

interface initial {
  artists: {
    type: String;
    id: number;
    cover_image: string;
    title: String;
    genre: String;
    style: String;
    thumb: string;
  }[];
  labels: {
    type: String;
    id: number;
    cover_image: ImageURISource;
    title: String;
    genre: String;
    style: String;
  }[];
  artist: {
    profile: String;
  };
  releases: {
    id: number;
    title: string;
    thumb: string;
    label: string;
    year: string;
    artist: string;
    format: string;
  }[];
  release: {
    title: String;
    genres: String;
    styles: String;
    tracklist: { title: string }[];
  };
}

const initial: initial = {
  artists: [],
  labels: [],
  artist: {
    profile: "",
  },
  releases: [],
  release: {
    title: "",
    genres: "",
    styles: "",
    tracklist: [],
  },
};

export default (state = initial, action: actionTypes): initial => {
  switch (action.type) {
    //search array objects
    case RECEIVE_SEARCH:
      if (!action.data.length) {
        return state;
      }
      const artists = action.data
        .filter((result: { type: string }) => result.type === "artist")
        .map((result) => result);
      const labels = action.data
        .filter((result: { type: string }) => result.type === "label")
        .map((result) => result);

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
