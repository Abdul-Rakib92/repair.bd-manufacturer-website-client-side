import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProduct = () => {

  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const url = `http://localhost:5000/tool`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(result =>{
        console.log(result);
    })

  };


    return (
        <div className="w-3/5 mx-auto">
      <h2 className='text-center text-3xl font-bold text-blue-700 mt-5'>Please Add Product</h2>
      <form className="card card-compact form-control m-10  p-8 bg-red-100 border-2 border-red-400" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          type="text"
          name="name"
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 50 })}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Email"
          type="email"
          name="email"
          value={user?.email}
          {...register("email")}
        />
        <textarea
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          name="description"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Price"
          type="number"
          name="price"
          {...register("price")}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Minimum Order Quantity"
          type="number"
          name="minimumOrderQuantity"
          {...register("minimumOrderQuantity")}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Available Order Quantity"
          type="number"
          name="availableOrderQuantity"
          {...register("availableOrderQuantity")}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Photo URL"
          type="text"
          name="img"
          {...register("img")}
        />
        <input className="bg-slate-800 text-white text-lg w-1/2 mx-auto font-bold mb-3 border-2 border-lime-800 rounded-full p-4" type="submit" value="Add Product" />
      </form>
    </div>
    );
};

export default AddProduct;