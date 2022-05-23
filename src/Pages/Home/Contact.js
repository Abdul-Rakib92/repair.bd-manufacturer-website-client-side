import React from "react";
import contact from "../../assets/images/contact.jpg";
import ButtonPrimary from "../Shared/ButtonPrimary";

const Contact = () => {
  return (
    <div className="bg-red-50">
      <h2 className="text-primary text-4xl font-bold text-center my-10 pt-5">
        Contact Me
      </h2>

      <div className="grid grid-row grid-flow-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <img src={contact} alt="" />
          </div>

          <div className="w-2/3 text-center ml-10">
            <div class="form-control">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="border-solid border-2 border-sky-800 rounded-2xl my-3 p-4"
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Your Email"
                className="border-solid border-2 border-sky-800 rounded-2xl my-3 p-4"
              />

              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Your Feedback"
                className="border-solid border-2 border-sky-800 rounded-2xl my-3 p-4"
              ></textarea>

              <ButtonPrimary>Submit</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
