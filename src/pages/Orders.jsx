import React from "react";
import OrdersTable from "../components/OrdersTable";
import { FiSearch } from "react-icons/fi";

function Orders() {
  return (
    <div className="p-3">
      <section className="bg-white p-3">
        <header className="flex items-center justify-between my-3 mb-5">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold">Orders</p>
            <select className="px-3">
              <option value="all">All</option>
              <option value="approaving">Approaving</option>
              <option value="delivered">Delivered</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div className="flex items-center gap-3 bg-input px-3 p-2 rounded-md text-lblack">
            <FiSearch className="text-xl" />
            <input
              type="search"
              placeholder="Search with Order ID"
              className="bg-input"
            />
          </div>
        </header>
        <OrdersTable />
      </section>
    </div>
  );
}

export default Orders;
