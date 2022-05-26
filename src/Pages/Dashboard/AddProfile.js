import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProfile = () => {

  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    console.log(data);
    const url = `http://localhost:5000/myProfile`;
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
        <div className="w-3/5 mx-auto h-screen">
      <h2 className='text-center text-3xl font-bold text-blue-700 mt-5'>Create Profile</h2>
      
      <form className="card card-compact form-control m-10  p-8 bg-gray-400 border-2 border-red-400" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          type="text"
          name="name"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 50 })}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Email"
          type="email"
          name="email"
          {...register("email")}
        />
        <textarea
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          name="education"
          placeholder="Education Background"
          {...register("education")}
        />
        <textarea
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          name="tecnology"
          placeholder="Tecnology Use For Web Development"
          {...register("tecnology")}
        />
        <textarea
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          name="skill"
          placeholder="Skills"
          {...register("skill")}
        />
        <textarea
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          name="Project"
          placeholder="Previous project link"
          {...register("project")}
        />
        
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          type="text"
          name="location"
          placeholder="Location"
          {...register("location")}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Phone Number"
          type="number"
          name="phone"
          {...register("phone")}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Linkedin Link"
          type="text"
          name="linkedin"
          {...register("linkedin")}
        />
        <input
          className="mb-3 border-2 border-lime-800 rounded-full p-4"
          placeholder="Photo URL"
          type="text"
          name="img"
          {...register("img")}
        />
        <input className="bg-slate-800 text-white text-lg w-1/2 mx-auto font-bold mb-3 border-2 border-lime-800 rounded-full p-4" type="submit" value="Add Profile" />
      </form>
    </div>
    );
};

export default AddProfile;