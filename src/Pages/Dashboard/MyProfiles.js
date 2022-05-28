import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import useProfiles from "../../hooks/useProfiles";
import Loading from "../Shared/Loading";
import MyProfile from "./MyProfile";
// import MyProfile from "./MyProfile";

const MyProfiles = () => {
  // const [myProfiles, setMyProfiles] = useProfiles;

  const { data: myProfiles, isLoading } = useQuery('myProfiles', () => fetch('https://thawing-river-24903.herokuapp.com/myProfile').then(res => res.json()));



  if (isLoading) {
    return <Loading></Loading>
}

  return (
    <div className="h-screen">
      <h2 className="text-primary text-center m-3 text-4xl font-bold">
        {" "}
        My profile
      </h2>



      <Link to={`/dashboard/addProfile`}>
        <button className="btn btn-primary text-slate-50 w-40  border-0 rounded-xl p-3 mx-auto mt-5">
          Add Profile
        </button>
      </Link>

      {myProfiles.map((myProfile) => (
        <div key={myProfile._id}
        myProfile={myProfile}>
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
