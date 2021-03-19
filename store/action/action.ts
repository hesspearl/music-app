import {
  actionTypes,
  ObjectResult,
  RECEIVE_ARTIST,
  REQUEST_ARTIST,
  RECEIVE_SEARCH,
  REQUEST_SEARCH,
  RECEIVE_RELEASE,
  REQUEST_RELEASE,
  RECEIVE_RELEASE_DATA,
  REQUEST_RELEASE_DATA,
} from "./types";

export const requestSearchAction = (data: String): actionTypes => {
  return { type: REQUEST_SEARCH, data };
};

export const receiveSearchAction = (data: ObjectResult): actionTypes => {
  return { type: RECEIVE_SEARCH, data };
};

export const requestArtistAction = (id: Number): actionTypes => {
  return { type: REQUEST_ARTIST, id };
};

export const receiveArtistAction = (data: ObjectResult): actionTypes => {
  return { type: RECEIVE_ARTIST, data };
};

export const requestReleaseAction = (
  id: Number,
  typeOfArtist: string
): actionTypes => {
  return { type: REQUEST_RELEASE, id, typeOfArtist };
};
export const receiveReleaseAction = (data: ObjectResult): actionTypes => {
  return { type: RECEIVE_RELEASE, data };
};

export const requestReleaseDataAction = (id: Number): actionTypes => {
  return { type: REQUEST_RELEASE_DATA, id };
};

export const receiveReleaseDataAction = (data: ObjectResult): actionTypes => {
  return { type: RECEIVE_RELEASE_DATA, data };
};
