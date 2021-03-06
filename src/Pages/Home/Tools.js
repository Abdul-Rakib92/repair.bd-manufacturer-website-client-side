import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect( () => {
        fetch('https://thawing-river-24903.herokuapp.com/tool')
        .then(res => res.json())
        .then(data => setTools(data));
    }, [])

    return (
        <div>
            <h1 className='text-primary text-center mt-3 text-4xl font-bold'>Tools</h1>

            <div className='grid grid-row grid-flow-col gap-5'>

                <div className='grid grid-cols-1  md:grid-cols-2'>
                    {
                        tools.map(tool => <Tool
                            key ={tool._id}
                            tool={tool}
                        >
                        </Tool>)
                    }
                </div>

            </div>
            
        </div>
    );
};

export default Tools;