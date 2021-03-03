import { actionTypes, SEARCH } from "./types";

export const searchArtist = (artist: string): actionTypes => {
  return { type: SEARCH, artist };
};
