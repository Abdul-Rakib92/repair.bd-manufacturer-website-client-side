import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProfiles from "../../hooks/useProfiles";
// import MyProfile from "./MyProfile";

const MyProfiles = () => {
  const [myProfiles, setMyProfiles] = useProfiles;

  return (
    <div>
      <h2 className="text-primary text-center m-3 text-4xl font-bold">
        {" "}
        My profile
      </h2>

      <Link to={`/addProfile`}>
        <button className="btn btn-primary w-40  border-0 rounded-xl p-3 mx-auto mt-5">
          Add New Item
        </button>
      </Link>

      {myProfiles.map((myProfile) => (
        <div key={myProfile._id}>
          <div className="card card-compact border border-red-400  bg-base-100 shadow-xl m-6">
            <figure>
              <img src={myProfile.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {myProfile.name}</h2>
              <h2>Email: {myProfile.email}</h2>
              <h2>Phone Number: {myProfile.phone}</h2>
              <h2>Linkedin: {myProfile.linkedin}</h2>
              <h2>Education Background: {myProfile.education}</h2>
              <h2>Tecnology: {myProfile.tecnology}</h2>
              <h2>Skills: {myProfile.skill}</h2>
              <h2>Location(city): {myProfile.location}</h2>
              <h2>Project(Previcely maded): {myProfile.project}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProfiles;
