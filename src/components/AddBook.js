import React from 'react';

const AddBook = () => (
  <div className="add-book">
    <h3>Add New Book</h3>
    <form>
      <input type="text" placeholder="Book title" name="title" required />
      <select name="category" required>
        <option value="" disabled selected hidden>
          Category
        </option>
        <option value="coffee">Action</option>
        <option value="tea">Fiction</option>
        <option value="milk">Fantasy</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBook;
