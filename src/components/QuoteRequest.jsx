import React from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard";

class QuoteRequest extends QuoteCard {
  constructor(props) {
    super(props);
    this.state = {
      getCharacter: "",
      getQuote: "",
      getImage: "",
    };

    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          getCharacter: data[0].character,
          getQuote: data[0].quote,
          getImage: data[0].image,
        });
      });
  }

  render() {
    const { getCharacter, getImage, getQuote } = this.state;
    return (
      <div>
        <QuoteCard character={getCharacter} quote={getQuote} image={getImage} />
        <button id="get-quote" onClick={this.getQuote}>
          Get a new quote
        </button>
      </div>
    );
  }
}

export default QuoteRequest;
