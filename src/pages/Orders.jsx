import { useState, useEffect } from "react";
import OrdersTable from "../components/OrdersTable";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

function Orders() {
  const [value, setValue] = useState("all");
  const [orderId, setOrderId] = useState("");
  const [filtered, setFiltered] = useState([]);
  const { orders } = useSelector((store) => store.orders);

  useEffect(() => {
    const getOrders = () => {
      if (value === "all") {
        setFiltered(
          orders.filter((order) => order.orderId.toString().includes(orderId))
        );
      } else if (value === "pending") {
        const res = orders.filter((o) => o.status === "pending");
        setFiltered(
          res.filter((order) => order.orderId.toString().includes(orderId))
        );
      } else if (value === "delivered") {
        const res = orders.filter((o) => o.status === "delivered");

        setFiltered(
          res.filter((order) => order.orderId.toString().includes(orderId))
        );
      } else if (value === "cancelled") {
        const res = orders.filter((o) => o.status === "cancelled");

        setFiltered(
          res.filter((order) => order.orderId.toString().includes(orderId))
        );
      } else {
        const res = orders.filter((o) => o.status === "on-transit");

        setFiltered(
          res.filter((order) => order.orderId.toString().includes(orderId))
        );
      }
    };
    getOrders();
  }, [value, orderId, orders]);

  return (
    <div className="p-3">
      <section className="bg-white p-3">
        <header className="flex items-center justify-between my-3 mb-5">
          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold">Orders</p>
            <select className="px-3" onChange={(e) => setValue(e.target.value)}>
              <option value="all">All</option>
              <option value="on-transit">On transit</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Canceleld</option>
            </select>
          </div>
          <div className="flex items-center gap-3 bg-input px-3 p-2 rounded-md text-lblack">
            <FiSearch className="text-xl" />
            <input
              type="number"
              placeholder="Search with Order ID"
              className="bg-input"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value.trim())}
            />
          </div>
        </header>
        <OrdersTable filtered={filtered} />
      </section>
    </div>
  );
}

export default Orders;
