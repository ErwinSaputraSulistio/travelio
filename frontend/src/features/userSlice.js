import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
	  bookSearchResult: [],
  },
  reducers: {
    searchBook: (state = [], action) => {
      state.bookSearchResult = action.payload
    },
  },
})

export const { searchBook } = userSlice.actions

export default userSlice.reducer
