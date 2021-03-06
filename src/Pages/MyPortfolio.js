import React from "react";
import me from "../assets/images/me.jpg";
import mission from "../assets/images/mission.jpg";
import developer from "../assets/images/developer.jpg";
import about from "../assets/images/developer.jpg";
import ButtonPrimary from "./Shared/ButtonPrimary";

const MyPortfolio = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-blue-700 mt-5">
        My Portfolio
      </h2>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={me} className="max-w-lg rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-7xl font-bold">
              Stay Focused on{" "}
              <span className="text-orange-600">Mission 2022</span>
            </h1>
            <p className="py-6 text-xl">
              My Name is Abdul Rakib and I am 29 years old. I am not graduated
              from University in CSE. But I am so determined to learn web
              development. My mission is to complete my web development course
              properly in the next 8th month's and make a carrier in it.
            </p>
            <ButtonPrimary>More Info</ButtonPrimary>
          </div>

          
        </div>
      </div>

      <div className="hero min-h-screen bg-slate-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={mission} className="max-w-sm rounded-lg shadow-2xl" alt="" />
    <div className="mx-20">
    <div>
      <h1 className="text-5xl font-bold text-orange-500">Mission</h1>
      <p className="py-6 text-xl">My mission is to be a Front End Developer in the next four-month. As a Front End Developer, I would like to have achieved skills in HTML, CSS, JAVASCRIPT and REACT.</p>
      
    </div>
    <br />

    <div>
      <h1 className="text-5xl font-bold text-amber-700">Vision</h1>
      <p className="py-6 text-xl">My vision is to complete this web development course and get a chance in a special course named SCIC. After that, I wish to join the ACC course so that I learn about Back End Development.</p>
      
    </div>
    <br />

    <div>
      <h1 className="text-5xl font-bold text-green-700">Goals</h1>
      <p className="py-6 text-xl">My goals are simple but very hard to achieve. I want to make my career as a Full-stack Developer. After completing this web development course, I wished to get a good job as a web developer.</p>
      
    </div>
    </div>
  </div>
</div>

<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={developer} className="max-w-xl rounded-lg shadow-2xl" alt=""/>
    <div>
      <h1 className="text-5xl font-bold">Develop
Without Limits</h1>
      <p className="py-6 text-xl">There are no limits to development in any sector. People make them better to keep developing themself. This is the nature of life, so am I. I would like to develop my skills and make myself a better web developer by learning many other web languages and programming languages.
</p>
      <ButtonPrimary>Read More</ButtonPrimary>
    </div>
  </div>
</div>

<div className="hero min-h-screen bg-base-100 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={about} className="max-w-xl rounded-lg shadow-2xl" alt=""/>
    <div className="ml-20">
      <h1 className="text-5xl font-bold ">My Information</h1>
      <p className="py-6 text-xl">I am a graduate person. I have completed my Bachelor of Business Administration from China Three Gorges University in 2017. Now I am fully determined to make my career as a web developer. .</p>
      
      
    </div>
  </div>
</div>

<div className=" mb-40">
  <h2 className="text-3xl ml-28 mb-10 font-bold">Contact Information</h2>
  <h3 className="text-xl ml-28">Name: Abdul Rakib</h3>
  <h3 className="text-xl ml-28">Email: rakibctgu@gmail.com</h3>
  <h3 className="text-xl ml-28">Phone: 01791757929</h3>
  <h3 className="text-xl ml-28">Address: 1450, Pater Bag Water Pump, South Donia, Sonirakra, South Jatrabari, Dhaka -1236</h3>
</div>

    </div>
  );
};

export default MyPortfolio;
