import React, { useEffect, useState } from "react";

const ManageProduct = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handleProductDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/tool/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = tools.filter((tool) => tool._id !== id);
          setTools(remaining);
        });
    }
  };

  return (
    <div className="h-screen">
      <h2 className="text-center text-2xl font-bold text-blue-700 mt-5">Manage Product</h2>

      <div className="grid grid-row grid-flow-col gap-5">
          <div className="grid grid-cols-1  md:grid-cols-2">

          {tools.map((tool) => (
          <div key={tool._id}>
            <div className="mt-5">
              <div className="card card-compact border border-red-400  bg-base-100 shadow-xl m-6 p-4">
                <figure>
                  <img src={tool.img} alt="" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{tool.name}</h2>
                  <h2>Price: ${tool.price}</h2>
                  <h2>Minimum Order Quantity: {tool.minimumOrderQuantity}</h2>
                  <h2>
                    Available Order Quantity: {tool.availableOrderQuantity}
                  </h2>
                  <p>{tool.description}</p>

                  <button
                    className="bg-red-600 text-white text-lg p-3 border-0 rounded-md mx-auto mb-2"
                    onClick={() => handleProductDelete(tool._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

          </div>
        
      </div>
    </div>
  );
};

export default ManageProduct;
