import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import bookstoreAPI from '../modules/bookstoreAPI';

export const fetchBooksFromAPI = createAsyncThunk(
  'books/fetchBooksFromAPI',
  async () => {
    const response = await bookstoreAPI.getBooks();
    return response;
  },
);

export const postBookToAPI = createAsyncThunk(
  'books/postBookToAPI',
  async (details) => {
    const response = await bookstoreAPI.postBook(details);
    return response;
  },
);

export const removeBookFromAPI = createAsyncThunk(
  'books/removeBookFromAPI',
  async (itemId) => {
    const response = await bookstoreAPI.removeBook(itemId);
    return response;
  },
);

const slice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      fetchBooksFromAPI.fulfilled,
      (books, action) => action.payload,
    );
    builder.addCase(postBookToAPI.fulfilled, (books, action) => {
      books.push(action.payload);
    });
    builder.addCase(removeBookFromAPI.fulfilled,
      (books, action) => books.filter((book) => book.itemId !== action.payload));
  },
});

export const { bookAdded, bookRemoved } = slice.actions;

export default slice.reducer;
