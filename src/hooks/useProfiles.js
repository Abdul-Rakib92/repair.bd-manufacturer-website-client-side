import { useEffect, useState } from "react";

const useProfiles = () => {
    const [myProfiles, setMyProfiles] = useState([]);
    

    useEffect( () => {
        fetch('http://localhost:5000/myProfile')
        .then(res => res.json())
        .then(data => setMyProfiles(data));
    }, []);
    return [myProfiles, setMyProfiles];
};

export default useProfiles;