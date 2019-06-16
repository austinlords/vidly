import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", rate: "" },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in stock"),
    rate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate")
  };

  doSubmit = () => {
    console.log("new movie form submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {
            <div className="form-group">
              <label>Genre</label>
              <select className="form-control" name="genres">
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="thriller">Thriller</option>
              </select>
            </div>
          }
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderSubmitButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
