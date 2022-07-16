import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../store/books';

const Book = ({ details }) => {
  const {
    itemId, title, author, category,
  } = details;

  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{category}</p>
        <div className="book-interactions">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => dispatch(removeBookFromAPI({ itemId }))}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="book-progress-percentage">
          <div className="Oval" />
          <div className="book-progress-percentage-text">
            <p>64%</p>
            <p>Completed</p>
          </div>
        </div>
        <div className="vertical-seperator" />
        <div className="book-progress-position">
          <p>Current Chapter</p>
          <p>Chapter 17</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  details: PropTypes.shape({
    itemId: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    progress: PropTypes.shape({
      percentage: PropTypes.number,
      currentChapter: PropTypes.string,
    }),
  }),
};

Book.defaultProps = {
  details: null,
};

export default Book;
