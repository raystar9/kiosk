import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name:"categorySlice",
  initialState: {
    selectedCategory: "01000"
  },

  reducers: {
    setCategory: (state, action) => {
      state = action.payload;
      return state;
    },
    getCategory: (state) => {
      return state.selectedCategory;
    }
  }
});

export const { setCategory, getCategory } = categorySlice.actions

export default categorySlice.reducer