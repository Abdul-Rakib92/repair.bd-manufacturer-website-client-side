import React from "react";
import banner from '../../assets/images/banner.jpg'
import ButtonPrimary from "../Shared/ButtonPrimary";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            class="max-w-xl rounded-lg shadow-2xl"
          />
          <div class="mr-5">
            <h1 class="text-5xl font-bold"> <span class="text-orange-500">Wellcome To Repair. <span class="text-accent">BD</span></span></h1>
            <p class="py-6 text-xl">
            Repair.BD has been selling power tools in Bangladesh for the last 10 years. We have industrial pressure washers, automatic drill machine & battery drill machine. We also have rotary hammer drill machines, bosch drill machine. But wait, there is more, demolition hammer drills etc. If you have any queries at all please contact us now.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
