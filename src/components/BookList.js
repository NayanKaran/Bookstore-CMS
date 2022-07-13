import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Book from './Book';
import { fetchBooksFromAPI } from '../store/books';

const BookList = () => {
  const books = useSelector((state) => state.entities.books);
  const listItems = books.map((book) => (
    <li key={book.itemId}>
      <Book details={book} />
    </li>
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksFromAPI());
  }, []);

  return <ul>{listItems}</ul>;
};

export default BookList;
