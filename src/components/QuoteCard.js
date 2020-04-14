import React from "react";
import "./styleQuote.css";


class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false };
  }

  render() {
    return (
      <figure className="QuoteCard">
        <img src={this.props.image} alt={this.props.character}></img>
        <figcaption>
          <blockquote>{this.props.quote}</blockquote>
          <p>
            <cite>{this.props.character}</cite>
            <span className={this.state.favorite?'is-favorite':''}
              onClick={(event) => {
              this.state.favorite ? this.setState({favorite: false}):this.setState({favorite: true})
              }}
            >
              &#9733;
            </span>
          </p>
        </figcaption>
      </figure>
    );
  }
}


export default QuoteCard;
