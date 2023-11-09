import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white w-full sm:px-8 px-2 text-white sticky top-0 z-[500] h-[100px]">
        <div className="flex gap-4 mx-auto w-full items-center justify-between py-[6px] h-[100px]">
          <div
            className={` text-blue-100 flex items-center justify-center h-full`}
          >
            <span className={`font-koulen text-black text-4xl`}>
              Food Ordering
            </span>
          </div>
          <div
            className={` text-blue-100 flex items-center justify-center h-full`}
          >
            <span className={`font-koulen text-black text-2xl`}>Login</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
