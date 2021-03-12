import { actionTypes, SEARCH } from "../action/types";

interface initial {
  artists: (
    | {
        type: "artist";
      }
    | undefined
  )[];
  labels: {
    type: "label";
  }[];
}

const initial: initial = {
  artists = [],
  labels = [],
};

export default (state = initial, action: actionTypes): initial => {
  switch (action.type) {
    case SEARCH:
      const artists = action.artist.results.map(
        (result: { type: "artist" }) => {
          if (result.type === "artist") {
            return result;
          }
        }
      );
      const labels = action.artist.results.map(
        (result: { type: String }) => result.type === "labels"
      );

      return {
        artists: artists,
        labels: labels,
      };
  }

  return state;
};
