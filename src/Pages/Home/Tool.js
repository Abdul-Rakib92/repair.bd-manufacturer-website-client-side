import React from "react";

const Tool = ({ tool }) => {
  const {
    name,
    img,
    description,
    price,
    minimumOrderQuantity,
    availableOrderQuantity,
  } = tool;
  return (
    <div class="card card-compact  bg-base-100 shadow-xl m-6">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h2 >Price: ${price}</h2>
        <h2 >Minimum Order Quantity: {minimumOrderQuantity}</h2>
        <h2 >Available Order Quantity: {availableOrderQuantity}</h2>
        <p>{description}</p>
        
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
