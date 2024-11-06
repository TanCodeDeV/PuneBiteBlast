import ResturantCard from "./ResturantCard";
import restaurantList from "../utlis/resList.js";
import { useState } from "react";

const Body = () => {
  const [ListofResturants, setListofResturants] = useState(restaurantList);

  return (
    <div className="body-container">
      <div className="body_header">
        <div className="serach-bar">Search Here!</div>
        <div className="filter4Star">
          <button
            className="filter-button"
            onClick={() => {
              const filtered4List = ListofResturants.filter(
                (res) => res.data.avgRating > 4
              );
              setListofResturants(filtered4List);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="filterVegResturant">
          <button
            className="filter-button"
            onClick={() => {
              const filterVegList = ListofResturants.filter(
                (res) => res.data.veg
              );
              setListofResturants(filterVegList);
            }}
          >
            Veg Only
          </button>
        </div>
      </div>
      <div className="resturant-container">
        {ListofResturants.map((resturant) => (
          <ResturantCard resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
