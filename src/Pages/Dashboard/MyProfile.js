// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const MyProfile = ({MyProfile}) => {
//     const {_id, name, img, email, education, tecnology, skill, location, phone, linkedin, project} = MyProfile;
//   const navigate = useNavigate();
//   const navigateToAddProfile = id =>{
//     navigate('/addProfile');
// }

//     return (
//         <div className="card card-compact border border-red-400  bg-base-100 shadow-xl m-6">
//       <figure>
//         <img
//           src={img}
//           alt=""
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">Name: {name}</h2>
//         <h2 >Email: {email}</h2>
//         <h2 >Phone Number: {phone}</h2>
//         <h2 >Linkedin: {linkedin}</h2>
//         <h2 >Education Background: {education}</h2>
//         <h2 >Tecnology: {tecnology}</h2>
//         <h2 >Skills: {skill}</h2>
//         <h2 >Location(city): {location}</h2>
//         <h2 >Project(Previcely maded): {project}</h2>
        
//         <div className="card-actions justify-end">
//           <button onClick={() => navigateToAddProfile(_id)} className="btn btn-primary">Add Profile</button>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default MyProfile;