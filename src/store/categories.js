import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = slice.actions;

export default slice.reducer;
