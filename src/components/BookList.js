import { useSelector } from 'react-redux';
import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.entities.books);
  const listItems = books.map((book) => (
    <li key={book.id}>
      <Book details={book} />
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default BookList;
