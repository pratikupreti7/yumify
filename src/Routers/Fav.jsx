import React from 'react';
import { useSelector } from 'react-redux';
import DataList from '../DataList/DataList';
import './styles.css';

const Fav = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites-container">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Your Favorites</h2>
      <DataList resData={favorites} />
    </div>
  );
};

export default Fav;
