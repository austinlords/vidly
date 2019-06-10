import React from "react";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

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
              <a className="page-link" onClick={() => onPageChange(i + 1)}>
                {i + 1}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
