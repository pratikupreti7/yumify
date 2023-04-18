import React from 'react';
import './styles.css';

const Data = (props) => {
  const item = props.data.data;
  const isGood = (item.avgRating) >= 3.8;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:-translate-y-1 hover:shadow-xl">
      {/* Name */}
      <h2 className="text-teal-500 font-bold text-lg px-4 py-2 truncate">{item.name}</h2>
      {/* images */}
      <div className="relative overflow-hidden ">
        <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.cloudinaryImageId}`} alt="" className="object-cover w-full h-48 transition-all duration-500 ease-in-out transform hover:scale-110" />
        <span className="absolute bottom-0 right-0 rounded-tl-lg bg-teal-500 text-white font-bold py-1 px-2 text-sm">{item.ratingText}</span>
      </div>
      
      {/* Cusines*/}
   
      <h4 className="text-gray-500 px-4  truncate">{item.cuisines.join(", ")}</h4>
      {/* ratings */}
     
      <div className="flex justify-between px-4 py-2">
        <div className={`${isGood ? 'text-teal-500 border-solid border-red-500' : 'text-red-400'}`}>
          <h4 className="text-lg font-bold">{item.avgRating}</h4>
          <span className="text-sm font-medium">({(item.totalRatings)<=1000?(item.totalRatingsString):(item.totalRatings)/1000+"k+ ratings"})</span>
        </div>
        {/* ETA */}
        <h4 className="text-gray-500 font-medium">{item.deliveryTime} mins</h4>
        <h4 className="text-gray-500 font-medium">{item?.costForTwoString}</h4>
      </div>
      <button className="hover:text-teal-500 text-gray-500 text-2xl py-2 px-4 w-full focus:outline-none">
        ♡
      </button>
    </div>
  );
};

export default Data;










        // {/* { isFav ? '❤️' : '🤍' } */}
        // {/*  { isFav ? '♡' : '♥'} */}