import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

const ManageAllOrder = () => {
  // const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getManageOrders = async () => {
      //   const email = user.email;
      const url = "https://thawing-river-24903.herokuapp.com/order";
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getManageOrders();
  }, []);

  const handleManageDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://thawing-river-24903.herokuapp.com/order/${id}`;
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



    <div className="h-screen w-full">
      <h2 className="text-center text-2xl font-bold text-blue-700 mt-5">
        My Order
      </h2>

      <h2 className="text-xl font-bold m-5">Your orders: {orders.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Tool</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.tool}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{order.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
                <td><button
                className="bg-red-600 text-white text-sm p-1 border-0 rounded-md "
                onClick={() => handleManageDelete(order._id)}
              >
                Delete
              </button></td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      
    </div>


  );
};

export default ManageAllOrder;
