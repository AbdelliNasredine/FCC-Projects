import axios from "axios";

const QUOTE_API_URL = "";

export const FETCH_RANDOM_QUOT_STARTED = "FRQS";
export const FETCH_RANDOM_QUOT_SUCCESS = "FRQSC";
export const FETCH_RANDOM_QUOT_FAILED = "FRQF";

export const fetchRandomQuotStarted = () => {
  return {
    type: FETCH_RANDOM_QUOT_STARTED,
  };
};

export const fetchRandomQuotSuccess = (quote) => {
  return {
    type: FETCH_RANDOM_QUOT_STARTED,
    payload: quote,
  };
};

export const fetchRandomQuotFailed = (error) => {
  return {
    type: FETCH_RANDOM_QUOT_STARTED,
    payload: error,
  };
};

export const fetchRandomQuot = () => {
  return (dispatch) => {
    dispatch(fetchRandomQuotSuccess());
    axios
      .get(QUOTE_API_URL)
      .then((res) => {
        console.log(res.data);
        dispatch(fetchRandomQuotSuccess(res.data));
      })
      .catch((error) => dispatch(fetchRandomQuotFailed(error)));
  };
};
