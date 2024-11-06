import ResturantCard from "./ResturantCard";
import restaurantList from "../utlis/resList.js";

const Body = () => {
  return (
    <div className="body-container">
      <div className="serach-bar">Search Here!</div>
      <div className="resturant-container">
        {restaurantList.map((resturant) => (
          <ResturantCard resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
