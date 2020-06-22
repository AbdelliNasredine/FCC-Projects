import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomQuot } from "../actions/quotActions";
import Loader from "./Loader";

class Quote extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRandomQuot());
  }

  render() {
    const { isLoading, error, quote } = this.props;
    console.log(error);
    return (
      <div className="Quote">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="Quote-body">
            {error ? (
              <span>Network Error</span>
            ) : (
              <>
                <p>{quote.text}</p>
                <span>by {quote.author}</span>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Quote);
