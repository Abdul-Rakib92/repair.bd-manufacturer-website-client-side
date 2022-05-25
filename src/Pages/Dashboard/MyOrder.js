import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [user]);

  const handleOrderDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-blue-700 mt-5">
        My Order
      </h2>
      <h2 className="text-xl font-bold m-5">Your orders: {orders.length}</h2>

      {orders.map((order) => (
        <div className="grid grid-cols-1  md:grid-cols-2" key={order._id}>
          <div className="mt-5">
            <div className="card card-compact border border-red-400  bg-base-100 shadow-xl m-6 p-4">
              <p>Name: {order.name}</p>
              <p>Email: {order.email}</p>
              <p>Tool Name:{order.tool}</p>
              <p>quantity: {order.quantity}</p>
              <p>Address: {order.address}</p>
              <p>Phone: {order.phone}</p>

              <button
                className="bg-red-600 text-white text-lg p-3 border-0 rounded-md mx-auto mb-2"
                onClick={() => handleOrderDelete(order._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
