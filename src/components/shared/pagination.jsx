import React from "react";
import _ from "lodash"; //popular javascript library underscore
import { PropTypes } from "prop-types";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = itemCount / pageSize;
  const pages = _.range(1, pageCount + 1); // numbers from 1 to pageCount +1 will be stored as an array

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pages.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a
              className="page-link"
              onClick={event => {
                event.preventDefault();
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// used for type checking the component properties. To avoid sending data with wrong datatype

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
