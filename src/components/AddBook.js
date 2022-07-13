import { useDispatch } from 'react-redux';
import React from 'react';
import { bookAdded } from '../store/books';

const AddBook = () => {
  const dispatch = useDispatch();

  return (
    <div className="add-book">
      <h3>Add New Book</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            bookAdded({
              name: e.target.elements.title.value,
              author: e.target.elements.author.value,
            }),
          );
          e.target.reset();
        }}
      >
        <input type="text" placeholder="Book title" name="title" required />
        <input type="text" placeholder="Book Author" name="author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
