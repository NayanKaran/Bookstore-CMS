import { useDispatch } from 'react-redux';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBookToAPI } from '../store/books';

const AddBook = () => {
  const dispatch = useDispatch();

  return (
    <div className="add-book">
      <h3>Add New Book</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            postBookToAPI({
              title: e.target.elements.title.value,
              author: e.target.elements.author.value,
              category: e.target.elements.category.value,
              item_id: uuidv4(),
            }),
          );
          e.target.reset();
        }}
      >
        <input type="text" placeholder="Book title" name="title" required />
        <input type="text" placeholder="Book Author" name="author" required />
        <select name="category" required>
          <option defaultValue="" disabled selected hidden>
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Thrillers">Thrillers</option>
          <option value="Biography">Biography</option>
          <option value="Self-Help">Self-Help</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
