import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {[...Array(pagesCount)].map((el, i) => {
          return (
            <li
              className={
                i + 1 === currentPage ? "page-item active" : "page-item"
              }
              key={i}
              style={{ cursor: "pointer" }}
            >
              <button className="page-link" onClick={() => onPageChange(i + 1)}>
                {i + 1}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
