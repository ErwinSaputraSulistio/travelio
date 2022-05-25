import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
	  bookSearchResult: [],
    wishList: [],
  },
  reducers: {
    searchBook: (state = [], action) => {
      state.bookSearchResult = action.payload
    },
    wishList: (state = [], action) => {
      state.wishList = [...state.wishList, action.payload]
    },
  },
})

export const { searchBook, wishList } = userSlice.actions

export default userSlice.reducer
