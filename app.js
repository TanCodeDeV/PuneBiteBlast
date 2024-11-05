import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/media/08f8eddffda00967035650f7e50ef521.jpg?compress=1&resize=800x600&vertical=top"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1001",
      name: "Vaishali",
      uuid: "de67f2b1-1b3b-45b2-920b-d2a5f99e2b65",
      city: "21",
      area: "Deccan Gymkhana",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId:
        "https://tse3.mm.bing.net/th?id=OIP.UjNtweSV2OLQnwvDiq_j7QHaFc&pid=Api&P=0&h=180",
      cuisines: ["South Indian", "Indian"],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 2.0,
      slugs: {
        restaurant: "vaishali-deccan-gymkhana",
        city: "pune",
      },
      cityState: "21",
      address: "1218/1, Fergusson College Road, Deccan Gymkhana, Pune",
      locality: "Deccan Gymkhana",
      parentId: 1201,
      veg: true,
      avgRating: "4.5",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1002",
      name: "Rupali",
      uuid: "f47cb7e5-32a6-473f-bc74-f63a4f9ef2a9",
      city: "21",
      area: "Deccan Gymkhana",
      totalRatingsString: "4000+ ratings",
      cloudinaryImageId:
        "https://img.restaurantguru.com/c2e2-meals-Roopali-Hotel-3.jpg?@m@t@s@d",
      cuisines: ["South Indian", "Indian", "Snacks"],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 25,
      maxDeliveryTime: 30,
      slaString: "25-30 MINS",
      lastMileTravel: 2.2,
      slugs: {
        restaurant: "rupali-deccan-gymkhana",
        city: "pune",
      },
      cityState: "21",
      address: "1218/1, Fergusson College Road, Deccan Gymkhana, Pune",
      locality: "Deccan Gymkhana",
      parentId: 1202,
      veg: true,
      avgRating: "4.3",
      totalRatings: 4000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1003",
      name: "Goodluck Cafe",
      uuid: "ac4e7b10-b6c6-4f4d-9e4f-267ef2a5c3c9",
      city: "21",
      area: "Deccan Gymkhana",
      totalRatingsString: "3000+ ratings",
      cloudinaryImageId:
        "https://media-cdn.tripadvisor.com/media/photo-s/0e/00/0b/15/cafe-goodluck.jpg",
      cuisines: ["Irani", "Biryani", "Fast Food"],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "goodluck-cafe-deccan-gymkhana",
        city: "pune",
      },
      cityState: "21",
      address: "759/75, Goodluck Chowk, Deccan Gymkhana, Pune",
      locality: "Deccan Gymkhana",
      parentId: 1203,
      veg: false,
      avgRating: "4.4",
      totalRatings: 3000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1004",
      name: "SP's Biryani",
      uuid: "54b7b1e7-8427-412f-8e78-f5c5e5273a1f",
      city: "21",
      area: "Kothrud",
      totalRatingsString: "2000+ ratings",
      cloudinaryImageId:
        "https://im.whatshot.in/img/2021/Feb/161963-c-1613888363.jpg",
      cuisines: ["Biryani", "North Indian"],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 3.5,
      slugs: {
        restaurant: "sps-biryani-kothrud",
        city: "pune",
      },
      cityState: "21",
      address: "Anand Nagar, Paud Road, Kothrud, Pune",
      locality: "Kothrud",
      parentId: 1204,
      veg: false,
      avgRating: "4.6",
      totalRatings: 2000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1005",
      name: "Sukanta",
      uuid: "48ef54a1-2e47-46e9-876f-98a3fa5b6f56",
      city: "21",
      area: "Deccan Gymkhana",
      totalRatingsString: "3000+ ratings",
      cloudinaryImageId: "https://i.ytimg.com/vi/uL8rCEfDf8Q/hqdefault.jpg",
      cuisines: ["Maharashtrian", "Thalis"],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 20,
      maxDeliveryTime: 30,
      slaString: "20-30 MINS",
      lastMileTravel: 2.3,
      slugs: {
        restaurant: "sukanta-deccan-gymkhana",
        city: "pune",
      },
      cityState: "21",
      address: "Prabhat Road, Deccan Gymkhana, Pune",
      locality: "Deccan Gymkhana",
      parentId: 1205,
      veg: true,
      avgRating: "4.2",
      totalRatings: 3000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1006",
      name: "Durvankur Dining Hall",
      uuid: "7cb1f2f1-56f7-4b42-819e-3a5e6123f5d3",
      city: "21",
      area: "Kothrud",
      totalRatingsString: "1500+ ratings",
      cloudinaryImageId:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/6f/bf/98/veg-thali.jpg?w=1200&h=-1&s=1",
      cuisines: ["Maharashtrian", "Thalis"],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 30,
      maxDeliveryTime: 35,
      slaString: "30-35 MINS",
      lastMileTravel: 3.0,
      slugs: {
        restaurant: "durvankur-dining-hall-kothrud",
        city: "pune",
      },
      cityState: "21",
      address: "Karve Road, Near Kothrud Depot, Kothrud, Pune",
      locality: "Kothrud",
      parentId: 1206,
      veg: true,
      avgRating: "4.1",
      totalRatings: 1500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1007",
      name: "Savya Rasa",
      uuid: "ef9a5d7d-0b91-4b60-9f9f-d5f73e7d3b07",
      city: "21",
      area: "Deccan Gymkhana",
      totalRatingsString: "2000+ ratings",
      cloudinaryImageId:
        "https://im.whatshot.in/img/2017/Oct/17634844-1725107047779997-4137303092141678431-n-cropped-1507550376.jpg?wm=1&w=1200&h=630&cc=1",
      cuisines: ["South Indian", "Keralite"],
      costForTwo: 90000,
      costForTwoString: "₹900 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 3.2,
      slugs: {
        restaurant: "savya-rasa-deccan-gymkhana",
        city: "pune",
      },
      cityState: "21",
      address: "Lane 7, South Main Road, Koregaon Park, Pune",
      locality: "Deccan Gymkhana",
      parentId: 1207,
      veg: false,
      avgRating: "4.6",
      totalRatings: 2000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1008",
      name: "Chaitanya Paratha",
      uuid: "5abde4a9-1a2e-470c-9b1c-efc2d2b8d471",
      city: "21",
      area: "Deccan Gymkhana",
      totalRatingsString: "2500+ ratings",
      cloudinaryImageId:
        "https://b.zmtcdn.com/data/pictures/chains/3/10013/34600614f8ed8b2f722c30442fd0fd9e.jpg",
      cuisines: ["North Indian", "Punjabi"],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 20,
      maxDeliveryTime: 30,
      slaString: "20-30 MINS",
      lastMileTravel: 2.0,
      slugs: {
        restaurant: "chaitanya-paratha-deccan-gymkhana",
        city: "pune",
      },
      cityState: "21",
      address: "Fergusson College Road, Deccan Gymkhana, Pune",
      locality: "Deccan Gymkhana",
      parentId: 1208,
      veg: true,
      avgRating: "4.3",
      totalRatings: 2500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1009",
      name: "Darshan",
      uuid: "afd832fa-841c-4df2-8dc1-9268abf2f2cf",
      city: "21",
      area: "Kothrud",
      totalRatingsString: "1800+ ratings",
      cloudinaryImageId:
        "https://tse4.mm.bing.net/th?id=OIP.bJBjuTqdxu8SSYBov_JBeAHaEK&pid=Api&P=0&h=180",
      cuisines: ["Bakery", "Desserts"],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 15,
      maxDeliveryTime: 25,
      slaString: "15-25 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "darshan-kothrud",
        city: "pune",
      },
      cityState: "21",
      address: "Karve Road, Near Kothrud Depot, Kothrud, Pune",
      locality: "Kothrud",
      parentId: 1209,
      veg: true,
      avgRating: "4.4",
      totalRatings: 1800,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "1010",
      name: "Bedekar Misal",
      uuid: "fdac7eaf-2342-4c9c-92c1-367c9df1e7d5",
      city: "21",
      area: "Deccan Gymkhana",
      totalRatingsString: "1500+ ratings",
      cloudinaryImageId:
        "https://1.bp.blogspot.com/_LrhDa7ybT2E/TRQzFPcwjmI/AAAAAAAABXU/ikWPY-O1QGY/s1600/Misal+Pav.jpg",
      cuisines: ["Maharashtrian", "Snacks"],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 15,
      maxDeliveryTime: 25,
      slaString: "15-25 MINS",
      lastMileTravel: 2.1,
      slugs: {
        restaurant: "bedekar-misal-deccan-gymkhana",
        city: "pune",
      },
      cityState: "21",
      address: "Narayan Peth, Near Patrya Maruti, Pune",
      locality: "Deccan Gymkhana",
      parentId: 1210,
      veg: true,
      avgRating: "4.5",
      totalRatings: 1500,
      new: false,
    },
    subtype: "basic",
  },
];

const ResturantCard = (props) => {
  const { resName } = props;
  return (
    <div className="resCard">
      <img className="resCardImg" src={resName.data.cloudinaryImageId}></img>
      <h3>{resName.data.name}</h3>
      <h4>{resName.data.cuisines.join(", ")}</h4>
      <h4>{resName.data.avgRating}⭐</h4>
      <h4>{resName.data.slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="serach-bar">Search Here!</div>
      <div className="resturant-container">
        <ResturantCard resName={restaurantList[0]} />
        <ResturantCard resName={restaurantList[1]} />
        <ResturantCard resName={restaurantList[2]} />
        <ResturantCard resName={restaurantList[3]} />
        <ResturantCard resName={restaurantList[4]} />
        <ResturantCard resName={restaurantList[5]} />
        <ResturantCard resName={restaurantList[6]} />
        <ResturantCard resName={restaurantList[7]} />
        <ResturantCard resName={restaurantList[8]} />
        <ResturantCard resName={restaurantList[9]} />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h4>Copyright © 2024</h4>
      <h4>by Swiggy</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);