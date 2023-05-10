import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    editOrder: false,
  },
  reducers: {
    toggleOrder: (state) => {
      state.editOrder = !state.editOrder;
    },
  },
});

export const { toggleOrder } = modalSlice.actions;
export default modalSlice.reducer;
