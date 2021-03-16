import { searchArtist } from "./action";

export const SEARCH = "SEARCH";
export const GET_ARTIST = "GET_ARTIST";
export const RELEASE = "RELEASE";
export const RELEASE_DATA = "RELEASE_DATA";

export type ObjectResult = {
  results: [] | string;
};

interface searchAction {
  type: typeof SEARCH;
  artist: ObjectResult;
}

interface getArtistAction {
  type: typeof GET_ARTIST;
  artist: ObjectResult;
}

interface getResultAction {
  type: typeof RELEASE;
  release: ObjectResult;
}
interface getReleaseDataAction {
  type: typeof RELEASE_DATA;
  release: ObjectResult;
}

export type actionTypes =
  | searchAction
  | getArtistAction
  | getResultAction
  | getReleaseDataAction;
