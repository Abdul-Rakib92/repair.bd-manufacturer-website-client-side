import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const [myOrders, setMyOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/myOrder")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  // useEffect(() => {
  //   const getMyOrders = async () => {
  //     const email = user.email;
  //     const url = `http://localhost:5000/myOrder?email=${email}`;
  //     const { data } = await axios.get(url);
  //     setMyOrders(data);
  //   };
  //   getMyOrders();
  // }, [user]);

  useEffect(() => {
    if (user) {
      const email = user.email;
      fetch(`http://localhost:5000/myOrder?email=${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setMyOrders(data);
        });
    }
  }, [user]);

  const handleMyOrderDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/myOrder/${id}`;
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
    <div className="h-screen w-full">
      <h2 className="text-center text-2xl font-bold text-blue-700 mt-5">
        My Order
      </h2>

      <h2 className="text-xl font-bold m-5">Your orders: {myOrders.length}</h2>

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
            {myOrders.map((myOrder, index) => (
              <tr key={myOrder._id}>
                <th>{index + 1}</th>
                <td>{myOrder.name}</td>
                <td>{myOrder.email}</td>
                <td>{myOrder.tool}</td>
                <td>{myOrder.price}</td>
                <td>{myOrder.quantity}</td>
                <td>{myOrder.address}</td>
                <td>{myOrder.phone}</td>
                <td>
                  {myOrder.price && !myOrder.paid && (
                    <Link to={`/dashboard/payment/${myOrder._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {myOrder.price && myOrder.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {myOrder.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    className="bg-red-600 text-white text-sm p-1 border-0 rounded-md "
                    onClick={() => handleMyOrderDelete(myOrder._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div className="h-screen">
    //   <h2 className="text-center text-2xl font-bold text-blue-700 mt-5">
    //     My Order
    //   </h2>
    //   <h2 className="text-xl font-bold m-5">Your orders: {myOrders.length}</h2>

    //   {myOrders.map((myOrder) => (
    //     <div className="grid grid-cols-1  md:grid-cols-2" key={myOrder._id}>
    //       <div className="mt-5">
    //         <div className="card card-compact border border-red-400  bg-base-100 shadow-xl m-6 p-4">
    //           <p>Name: {myOrder.name}</p>
    //           <p>Email: {myOrder.email}</p>
    //           <p>Tool Name:{myOrder.tool}</p>
    //           <p>Product Price:{myOrder.price}</p>
    //           <p>quantity: {myOrder.quantity}</p>
    //           <p>Address: {myOrder.address}</p>
    //           <p>Phone: {myOrder.phone}</p>

    //           <button
    //             className="bg-red-600 text-white text-lg p-3 border-0 rounded-md mx-auto mb-2"
    //             onClick={() => handleMyOrderDelete(myOrder._id)}
    //           >
    //             Delete
    //           </button>

    //           <div>
    //           <Link to={`/dashboard/addProfile`}>
    //             <button className="btn btn-primary text-slate-50 w-40  border-0 rounded-xl p-3 mx-auto mt-5">
    //               Pay Now
    //             </button>
    //           </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default MyOrder;
