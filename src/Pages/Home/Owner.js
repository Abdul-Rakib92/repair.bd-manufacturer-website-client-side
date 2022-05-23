import React from "react";
import owner from "../../assets/images/owner.jpg";

const Owner = () => {
  return (
    <div>
      <div className="my-7">
        <h1 className="text-primary text-center my-10 text-4xl font-bold">
          Owner
        </h1>

        <div className='grid grid-row grid-flow-col gap-5'>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
          <div className="pl-40">
            <img src={owner} alt="" />
          </div>

          <div>
            <div className="checkout-text">
              <h5 className="text-red-700 font-bold text-lg mt-5">a few words about Owner</h5>
              <h1 className="text-6xl mt-5">Read My Story</h1>
              <p className="mt-5 text-xl">
                Repair.BD is huge new hardware drill machines manufacturing company stands
                in Bangladesh, and as far as
                owner Jhon Malek is concerned, that’s definitely a good thing.
              </p>
              <p className="mt-5 text-xl">
                Repair.BD is huge new hardware drill machines manufacturing company which takes care of all your Do-it-Yourself needs. We believe that everyone has the capability to improve their lifestyle by hacking their work and living spaces. Repair.BD does not only sell the products which helps you with your projects, we also consult and teach you to improve the way you conduct your projects.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
