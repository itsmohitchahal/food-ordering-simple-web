import React, { useState } from "react";

const HomeSlider = () => {
  return (
    <>
      <nav className="w-full relative h-full max-h-[484px]">
        <img
          src={"/Images/slider1.png"}
          alt={"Slider 1"}
          className={`w-full h-full max-h-[440px]`}
        />
        <div
          className={`absolute w-full h-full bottom-[10px] flex items-end justify-center`}
        >
          <button
            type={`button`}
            className={`bg-white w-[200px] h-[70px] font-koulen px-4 py-3 rounded-[390px] text-2xl text-[#952323]`}
          >
            Order
          </button>
        </div>
      </nav>
    </>
  );
};

export default HomeSlider;
