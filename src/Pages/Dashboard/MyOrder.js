import axios from "axios";
// import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import {  useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  // const navigate = useNavigate()


  useEffect(() => {
    fetch("http://localhost:5000/myOrder")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  useEffect(() => {
    const getMyOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myOrder?email=${email}`;
      const { data } = await axios.get(url);
      setMyOrders(data);
    };
    getMyOrders();
  }, [user]);



  // useEffect(() => {
  //   if (user) {
  //     fetch(`http://localhost:5000/myOrder?email=${user.email}`, {
  //       method: "GET",
  //       headers: {
  //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //       }
  //     })
  //     .then(res => {
  //       console.log('res', res);
  //       if (res.status === 401 || res.status === 403) {
  //         signOut(auth);
  //         localStorage.removeItem('accessToken');
  //         navigate('/');
  //       }
  //       return res.json ()
  //     })
  //     .then(data => {

  //       setMyOrders(data)
  //     });


  //   }
  // }, [user])

  const handleMyOrderDelete = (id) => {
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
          const remaining = myOrders.filter((myOrder) => myOrder._id !== id);
          setMyOrders(remaining);
        });
    }
  };

  return (
    <div className="h-screen">
      <h2 className="text-center text-2xl font-bold text-blue-700 mt-5">
        My Order
      </h2>
      <h2 className="text-xl font-bold m-5">Your orders: {myOrders.length}</h2>

      {myOrders.map((myOrder) => (
        <div className="grid grid-cols-1  md:grid-cols-2" key={myOrder._id}>
          <div className="mt-5">
            <div className="card card-compact border border-red-400  bg-base-100 shadow-xl m-6 p-4">
              <p>Name: {myOrder.name}</p>
              <p>Email: {myOrder.email}</p>
              <p>Tool Name:{myOrder.tool}</p>
              <p>quantity: {myOrder.quantity}</p>
              <p>Address: {myOrder.address}</p>
              <p>Phone: {myOrder.phone}</p>

              <button
                className="bg-red-600 text-white text-lg p-3 border-0 rounded-md mx-auto mb-2"
                onClick={() => handleMyOrderDelete(myOrder._id)}
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
