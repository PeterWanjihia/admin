import { createSlice } from "@reduxjs/toolkit";
import { orders } from "../../../data";

const initialState = {
  orders: [...orders],
  selectedOrder: null,
};
const OrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    selectOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    updateOrderData: (state, action) => {
      console.log(action.payload);
      const order = state.orders.find(
        (order) => order.orderId === action.payload.id
      );
      order.status = "on-transit";
      order.deliveryFee = action.payload.price;
    },
  },
});

export const { selectOrder, updateOrderData } = OrderSlice.actions;
export default OrderSlice.reducer;
