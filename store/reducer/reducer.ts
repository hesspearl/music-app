import { actionTypes, SEARCH } from "../action/types";

interface initial {
  search: string[];
}

const initial: initial = {
  search: [],
};

export default (state = initial, action: actionTypes): initial => {
  switch (action.type) {
    case SEARCH:
  }

  return state;
};
