import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ details }) => {
  const {
    name,
    genre,
    author,
    progress: { percentage, currentChapter },
  } = details;

  return (
    <div className="book">
      <div className="book-info">
        <h3>{name}</h3>
        <p>{author}</p>
        <p>{genre}</p>
      </div>
      <div className="book-interactions">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
      <div className="book-progress">
        <div className="book-progress-percentage">
          <p>
            {percentage}
            %
          </p>
          <p>Completed</p>
        </div>
        <div className="book-progress-position">
          <p>Current Chapter</p>
          <p>{currentChapter}</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
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
