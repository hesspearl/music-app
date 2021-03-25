export const REQUEST_SEARCH = "REQUEST_SEARCH";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const REQUEST_ARTIST = "REQUEST_ARTIST";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const REQUEST_RELEASES = "REQUEST_RELEASES";
export const RECEIVE_RELEASES = "RECEIVE_RELEASES";

export const REQUEST_RELEASE_DATA = "REQUEST_RELEASE_DATA";
export const RECEIVE_RELEASE_DATA = "RECEIVE_RELEASE_DATA";

export type ObjectResult = {
  results: [] | string;
};

interface receiveAction {
  type: typeof RECEIVE_SEARCH | typeof RECEIVE_RELEASES;

  data: [];
}
interface receiveObjectAction {
  type: typeof RECEIVE_RELEASE_DATA | typeof RECEIVE_ARTIST;
  data: {
    title: String;
    genres: String;
    styles: String;
    tracklist: { title: string }[];
    profile: String;
  };
}
interface requestStringAction {
  type: typeof REQUEST_SEARCH;
  data: String;
}

interface requestIDAction {
  type:
    | typeof REQUEST_ARTIST
    | typeof REQUEST_RELEASES
    | typeof REQUEST_RELEASE_DATA;
  id: Number;
  typeOfArtist?: string;
}

export type actionTypes =
  | requestStringAction
  | requestIDAction
  | receiveAction
  | receiveObjectAction;
