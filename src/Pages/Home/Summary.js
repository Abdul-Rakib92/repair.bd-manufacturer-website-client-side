import React from "react";
import { FlagIcon } from '@heroicons/react/solid'
import { ChartPieIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/solid'
import { ThumbUpIcon } from '@heroicons/react/solid'

const Summary = () => {
  return (
    <div className="mb-8">
      <h1 className="text-primary text-center my-20 text-4xl font-bold">
        Business Summary
      </h1>
      <h2 className="text-6xl text-sky-700 text-center   font-bold my-2 uppercase">
        Millions Of People Trust Us 
      </h2>

      <h3 className="text-2xl text-purple-800 text-center mb-16  font-bold uppercase">
        WE KNOW OUR CUSTOMER EXPECTATION
      </h3>

      <div className='grid grid-row grid-flow-col gap-5'>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 px-7 gap-2'>

        <div className="stats shadow text-center">
          <div className="stat">
            <div className="stat-title pl-16 "><FlagIcon className="w-28 h-20 text-pink-600 "></FlagIcon></div>
            <div className="stat-value text-5xl">72</div>
            <div className="stat-desc text-pink-600 font-bold text-2xl">Countries</div>
          </div>
        </div>
        
        <div className="stats shadow  text-center">
          <div className="stat">
          <div className="stat-title pl-16 "><ChartPieIcon className="w-28 h-20 text-pink-600 "></ChartPieIcon></div>
            <div className="stat-value text-5xl">550+</div>
            <div className="stat-desc text-pink-600 font-bold text-2xl">Complete Projects</div>
          </div>
        </div>

        <div className="stats shadow  text-center">
          <div className="stat">
            <div className="stat-title pl-16 "><EmojiHappyIcon className="w-28 h-20 text-pink-600 "></EmojiHappyIcon></div>
            <div className="stat-value text-5xl">280+</div>
            <div className="stat-desc text-pink-600 font-bold text-2xl">Happy Clients</div>
          </div>
        </div>

        <div className="stats shadow  text-center">
          <div className="stat">
            <div className="stat-title pl-16 "><ThumbUpIcon className="w-28 h-20 text-pink-600 "></ThumbUpIcon></div>
            <div className="stat-value text-5xl">520+</div>
            <div className="stat-desc text-pink-600 font-bold text-2xl">Positive Feedback</div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Summary;
