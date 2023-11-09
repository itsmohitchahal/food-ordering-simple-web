import React, { useState } from "react";
import CategoryCardWithImage from "./CategoryCards/CategoryCardWithImage";

const CategoriesContainer = () => {
  return (
    <>
      <nav className="w-full mt-8 max-w-[1140px] mx-auto">
        <div className="bg-white mt-14 sm:px-16 flex flex-col gap-4 mx-auto w-full items-start justify-between sm:py-8 rounded-[10px]">
          <span className={`font-koulen text-black text-3xl`}>Categories</span>
          <CategoryCardContainer />
        </div>
      </nav>
    </>
  );
};

export default CategoriesContainer;

const CategoryCardContainer = () => {
  return (
    <div
      className={`flex flex-wrap w-full justify-between content-center xl:gap-y-[56px]`}
    >
      <CategoryCardWithImage />
      <CategoryCardWithImage />
      <CategoryCardWithImage />
      <CategoryCardWithImage />
      <CategoryCardWithImage />
      <CategoryCardWithImage />
    </div>
  );
};
