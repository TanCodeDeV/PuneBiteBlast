const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, slaString, veg } =
    resData?.data;
  return (
    <div className="resCard">
      <img className="resCardImg" src={cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{slaString}</h4>
      <h4>{veg ? "Veg 💚" : "Non-Veg ❤️"}</h4>
    </div>
  );
};

export default ResturantCard;
