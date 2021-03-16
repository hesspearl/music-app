import {
  actionTypes,
  GET_ARTIST,
  SEARCH,
  ObjectResult,
  RELEASE,
  RELEASE_DATA,
} from "./types";

export const searchArtist = (artist: string): actionTypes => {
  return { type: SEARCH, artist };
};

export const getArtist = (artist: ObjectResult): actionTypes => {
  return { type: GET_ARTIST, artist };
};

export const getRelease = (release: ObjectResult): actionTypes => {
  return { type: RELEASE, release };
};

export const getReleaseData = (release: ObjectResult): actionTypes => {
  return { type: RELEASE_DATA, release };
};
