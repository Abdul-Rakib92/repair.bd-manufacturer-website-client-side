import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePurchase from "../hooks/usePurchase";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";



const Purchase = () => {
  const { toolId } = useParams();
  const [tool] = usePurchase(toolId);
//   const [user, loading, error] = useAuthState(auth);
const [user] = useAuthState(auth);

const handleOrder = event =>{
    event.preventDefault();
    const order = {
        name: user.displayName,
        email: user.email,
        tool: tool.name,
        toolId: toolId,
        quantity: event.target.quantity.value,
        address: event.target.address.value,
        phone: event.target.phone.value
    }
    axios.post('http://localhost:5000/order', order)
    .then(response =>{
        const {data} = response;
        if(data.insertedId){
            toast('Your order is placed!!!');
            event.target.reset();
        }
    })

    const myOrder = {
        name: user.displayName,
        email: user.email,
        tool: tool.name,
        toolId: toolId,
        quantity: event.target.quantity.value,
        address: event.target.address.value,
        phone: event.target.phone.value
    }
    axios.post('http://localhost:5000/myOrder', myOrder)
    .then(response =>{
        const {data} = response;
        if(data.insertedId){
            toast('Your order is placed!!!');
            event.target.reset();
        }
    })


}


  return (
    <div>
      <div className="card card-compact border border-red-400 w-2/4  bg-base-100 shadow-xl m-6">
        <figure>
          <img src={tool.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tool.name}</h2>
          <h2>Price: ${tool.price}</h2>
          <h2>Minimum Order Quantity: {tool.minimumOrderQuantity}</h2>
          <h2>Available Order Quantity: {tool.availableOrderQuantity}</h2>
          <p>{tool.description}</p>
        </div>
      </div>

      <form onSubmit={handleOrder} className="card card-compact form-control m-10 w-1/4 pl-8 bg-red-100 border border-red-400">
        <input
          type="text"
          name="name"
          disabled
          readOnly
          value={user?.displayName || ''}
          className="input input-bordered w-full max-w-xs mt-5"
        />
        <input
          type="email"
          name="email"
          disabled
          readOnly
          value={user?.email || ''}
          className="input input-bordered mt-5 w-full max-w-xs"
        />
        <input
          type="text"
          name="name"
          disabled
          readOnly
          value={tool.name || ''} 
          className="input input-bordered mt-5 w-full max-w-xs"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          className="input input-bordered mt-5 w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered mt-5 w-full max-w-xs"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered mt-5 w-full max-w-xs"
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-secondary mb-4 w-full mt-5 max-w-xs"
        />
      </form>
    </div>
  );
};

export default Purchase;
