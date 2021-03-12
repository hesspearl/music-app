import { searchArtist } from "./action";

export const SEARCH = "SEARCH";

type Artist = {
  results: [];
};

interface searchAction {
  type: typeof SEARCH;
  artist: Artist;
}

export type actionTypes = searchAction;
