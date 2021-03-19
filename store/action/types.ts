export const REQUEST_SEARCH = "REQUEST_SEARCH";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const REQUEST_ARTIST = "REQUEST_ARTIST";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const REQUEST_RELEASE = "REQUEST_RELEASE";
export const RECEIVE_RELEASE = "RECEIVE_RELEASE";

export const REQUEST_RELEASE_DATA = "REQUEST_RELEASE_DATA";
export const RECEIVE_RELEASE_DATA = "RECEIVE_RELEASE_DATA";

export type ObjectResult = {
  results: [] | string;
};

interface receiveAction {
  type:
    | typeof RECEIVE_SEARCH
    | typeof RECEIVE_ARTIST
    | typeof RECEIVE_RELEASE
    | typeof RECEIVE_RELEASE_DATA;
  data: ObjectResult;
}

interface requestStringAction {
  type: typeof REQUEST_SEARCH;
  data: String;
}

interface requestIDAction {
  type:
    | typeof REQUEST_ARTIST
    | typeof REQUEST_RELEASE
    | typeof REQUEST_RELEASE_DATA;
  id: Number;
  typeOfArtist?: string;
}

export type actionTypes = requestStringAction | receiveAction | requestIDAction;
