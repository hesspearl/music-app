import {
  actionTypes,
  ObjectResult,
  RECEIVE_ARTIST,
  REQUEST_ARTIST,
  RECEIVE_SEARCH,
  REQUEST_SEARCH,
  RECEIVE_RELEASES,
  REQUEST_RELEASES,
  RECEIVE_RELEASE_DATA,
  REQUEST_RELEASE_DATA,
} from "./types";

export const requestSearchAction = (data: String): actionTypes => {
  return { type: REQUEST_SEARCH, data };
};

export const receiveSearchAction = (data: []): actionTypes => {
  return { type: RECEIVE_SEARCH, data };
};

export const requestArtistAction = (id: Number): actionTypes => {
  return { type: REQUEST_ARTIST, id };
};

export const receiveArtistAction = (data: {}): actionTypes => {
  return { type: RECEIVE_ARTIST, data };
};

export const requestReleasesAction = (
  id: Number,
  typeOfArtist: string
): actionTypes => {
  return { type: REQUEST_RELEASES, id, typeOfArtist };
};
export const receiveReleasesAction = (data: []): actionTypes => {
  return { type: RECEIVE_RELEASES, data };
};

export const requestReleaseDataAction = (id: Number): actionTypes => {
  return { type: REQUEST_RELEASE_DATA, id };
};

export const receiveReleaseDataAction = (data: {}): actionTypes => {
  return { type: RECEIVE_RELEASE_DATA, data };
};
