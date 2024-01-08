import React from "react";
import favBookImg from "../assets/favoriteBooks/favorite-books.jpg";
import { Link } from "react-router-dom";
const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-row md:flex-row justify-between items-center gap-20">
      <div className="md:w-1/2">
        <img src={favBookImg} />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:-3/4 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>{" "}
        </h2>
        <p className="mb-10 text-lg md:w-5/6  ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          aliquid sint voluptatum culpa nemo soluta rem, dolorum necessitatibus
          aut, recusandae et ea nisi ad exercitationem accusamus suscipit ipsam
          corrupti deleniti?
        </p>
        {/* stats */}
        <Link to="/shop" classname="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 my-4 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14 ">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-bold">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-bold">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-bold">PDF Downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavBook;
