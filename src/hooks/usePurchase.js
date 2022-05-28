import { useEffect, useState } from "react";

const usePurchase = toolId => {
    const [tool, setTool] = useState({});

    useEffect( () =>{
        const url = `https://thawing-river-24903.herokuapp.com/tool/${toolId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setTool(data));

    }, [toolId]);
    return [tool]

}

export default usePurchase;