import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomQuot } from "../actions/quotActions";
import Loader from "./Loader";

class Quote extends Component {
  fetchQuot = () => {
    this.props.dispatch(fetchRandomQuot());
  };

  componentDidMount() {
    this.fetchQuot();
  }

  render() {
    const { isLoading, error, quote } = this.props;
    console.log(error);
    return (
      <div className="Quote">
        {isLoading ? (
          <Loader />
        ) : (
          <div id="quot-box" className="Quote-body">
            {error ? (
              <span>Network Error</span>
            ) : (
              <>
                <p id="text">{quote.text}</p>
                <span id="author">by {quote.author}</span>
                <div className="Quote-actions">
                  <a href="https://twitter.com/intent/tweet" id="tweet-quote">
                    tweet
                  </a>
                  <button id="new-quote" onClick={this.fetchQuot}>
                    new quot
                  </button>
                </div>
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
