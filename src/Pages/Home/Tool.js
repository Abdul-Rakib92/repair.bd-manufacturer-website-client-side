import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    img,
    description,
    price,
    minimumOrderQuantity,
    availableOrderQuantity,
  } = tool;

  const navigate = useNavigate();

  const navigateToToolDetail = id =>{
    navigate(`/tool/${id}`);
}



  return (
    <div className="card card-compact border border-red-400  bg-base-100 shadow-xl m-6">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 >Price: ${price}</h2>
        <h2 >Minimum Order Quantity: {minimumOrderQuantity}</h2>
        <h2 >Available Order Quantity: {availableOrderQuantity}</h2>
        <p>{description}</p>
        
        <div className="card-actions justify-end">
          <button onClick={() => navigateToToolDetail(_id)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
