import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "./../services/fakeMovieService";

class NewMovieForm extends Form {
  state = {
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
    genres: []
  };

  componentDidMount() {
    this.setState({ genres: getGenres() });
  }

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
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate")
  };

  doSubmit = () => {
    const { title, genre, numberInStock, dailyRentalRate } = this.state.data;
    saveMovie({ title, genre, numberInStock, dailyRentalRate });
    this.props.history.push("/movies");
  };

  render() {
    const genreOptions = this.state.genres.map(obj => {
      return {
        value: obj.name,
        label: obj.name,
        id: obj._id
      };
    });

    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", genreOptions)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderSubmitButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
