import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = movie => {
    const movies = this.state.movies;
    movies.splice(movies.indexOf(movie), 1);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = this.state.movies.map(m => {
      if (movie === m) {
        m.liked = !m.liked;
        return m;
      } else return m;
    });
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      currentGenre,
      sortColumn,
      movies: allMovies
    } = this.state;

    let filtered = currentGenre
      ? allMovies.filter(m => m.genre._id === currentGenre._id)
      : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    let count = this.state.movies.length;
    const {
      pageSize,
      currentPage,
      currentGenre,
      sortColumn,
      genres
    } = this.state;

    if (count === 0) return <p>There are no movies in the database!</p>;

    const result = this.getPageData();
    const { totalCount, data: movies } = result;

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              onSelect={this.handleGenreSelect}
              currentSelection={currentGenre}
              items={genres}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary mb-4"
              onClick={() => this.props.history.push("/movies/new")}
            >
              New Movie
            </button>
            <p>Showing {totalCount} movies in the database.</p>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
