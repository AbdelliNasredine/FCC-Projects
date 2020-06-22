import {
  FETCH_RANDOM_QUOT_FAILED,
  FETCH_RANDOM_QUOT_STARTED,
  FETCH_RANDOM_QUOT_SUCCESS,
} from "../actions/quotActions";

const INTIAL_STATE = {
  quote: {
    text: "test quot test",
    author: "test author",
  },
  error: null,
  isLoading: false,
};

const quotReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RANDOM_QUOT_STARTED:
      return Object.assign({}, state, { isLoading: true });
    case FETCH_RANDOM_QUOT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        quote: action.payload,
      });
    case FETCH_RANDOM_QUOT_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload,
      });
    default:
      return state;
  }
};

export default quotReducer;
