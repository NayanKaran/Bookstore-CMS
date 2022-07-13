import { createSlice } from '@reduxjs/toolkit';

let bookId = 0;

const slice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    bookAdded: (books, action) => {
      bookId += 1;
      books.push({ name: action.payload.name, author: action.payload.name, id: bookId });
    },
    bookRemoved: (books, action) => books.filter((book) => book.id !== action.payload.id),
  },
});

export const { bookAdded, bookRemoved } = slice.actions;

export default slice.reducer;
