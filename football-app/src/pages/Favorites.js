import React, { useState } from "react";
import Navbar from '../components/Navbar';
import CardFavorite from '../components/CardFavorite';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Favorite = () =>  {
  const [title] = useState("List Favorites");
  const {favorites} = useSelector(state => state.favoriteReducer);

  return (
    <>
      <Navbar/>
      <h1 className="mt-4">{title}</h1>
      <Link to={{ pathname: "/", }}>
        Back to Main Page
      </Link>
      <hr />
      {favorites.map((favorite, idx) => {
        return <CardFavorite data={favorite} key={idx} />;
      })}
    </>
  );      
}

export default Favorite;