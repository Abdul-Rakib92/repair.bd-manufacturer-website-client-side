import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MyProfile from './MyProfile';

const MyProfiles = () => {

    const [myProfiles, setMyProfiles] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/myProfile')
        .then(res => res.json())
        .then(data => setMyProfiles(data));
    }, [])


    return (
        <div>
            <h2 className='text-primary text-center m-3 text-4xl font-bold'> My profile</h2>

            <div>

                <div>

                    {
                        myProfiles.map(myProfile => <MyProfile
                            key ={myProfile._id}
                            myProfile={myProfile}
                        >
                        </MyProfile>)

                    }


                    <div className='text-center'>
                        <Link to={'/addProfile'}>
                        <button className="btn btn-primary">Add Profile</button>
                        </Link>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default MyProfiles;