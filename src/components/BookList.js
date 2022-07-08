import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: '0',
      name: 'The Alchemist',
      genre: 'Fiction',
      author: 'Paulo Coelho',
      progress: {
        percentage: 0,
        currentChapter: 'Introduction',
      },
    },
    {
      id: '1',
      name: 'Harry Potter and the Sorcerer\'s Stone',
      genre: 'Fiction',
      author: 'J.K. Rowling',
      progress: {
        percentage: 0,
        currentChapter: 'Introduction',
      },
    },
  ];

  const listItems = books.map((book) => (
    <li key={book.id}>
      <Book details={book} />
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export default BookList;
