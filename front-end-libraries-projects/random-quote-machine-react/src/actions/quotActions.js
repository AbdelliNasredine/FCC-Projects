import axios from "axios";

const QUOTE_API_URL = "https://type.fit/api/quotes";

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
    type: FETCH_RANDOM_QUOT_SUCCESS,
    payload: quote,
  };
};

export const fetchRandomQuotFailed = (error) => {
  return {
    type: FETCH_RANDOM_QUOT_FAILED,
    payload: error,
  };
};

export const fetchRandomQuot = () => {
  return (dispatch) => {
    dispatch(fetchRandomQuotStarted());
    axios
      .get(QUOTE_API_URL)
      .then(({ data }) => {
        const randIdx = Math.floor(Math.random() * data.length);
        dispatch(fetchRandomQuotSuccess(data[randIdx]));
      })
      .catch((error) => dispatch(fetchRandomQuotFailed(error)));
  };
};
