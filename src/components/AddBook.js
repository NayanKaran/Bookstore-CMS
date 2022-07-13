import React from 'react';

const AddBook = () => (
  <div className="add-book">
    <h3>Add New Book</h3>
    <form>
      <input type="text" placeholder="Book title" name="title" required />
      <input type="text" placeholder="Book Author" name="author" required />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBook;
