import { searchArtist } from "./action";

export const SEARCH = "SEARCH";

interface searchAction {
  type: typeof SEARCH;
  artist: string;
}

export type actionTypes = searchAction;
