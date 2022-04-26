import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sort: "active",
  },
  reducers: {
    setSort: (state, { payload }) => {
      state.sort = payload;
    }
  }
})

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer