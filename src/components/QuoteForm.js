import React from "react";
import "./quoteForm.css";

class QuoteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "Homer Simpson" };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    event.target.value.length<=MAX_LENGTH&&this.setState({value: event.target.value})
  }


  render() {
    return (
      <div>
      <form className="QuoteForm">
        <label htmlFor="character">Character:</label>
        <input className={this.state.value.length<MAX_LENGTH?'length-ok':'length-maximum-reached'}
          id="character"
          name="character"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    <p>Nombre de caractère restant : {MAX_LENGTH-this.state.value.length}</p>
      </div>
    );
  }
}

const MAX_LENGTH = 30;

export default QuoteForm;
