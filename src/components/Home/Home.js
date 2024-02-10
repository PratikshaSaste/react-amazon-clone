import React from "react";
import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Bhagwat Gita As It Is"
            price={500}
            image="https://m.media-amazon.com/images/I/51Pj2N72-yL.jpg"
            rating={5}
          />
          <Product
            title="Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB, 256GB Storage)"
            price={115999}
            image="https://m.media-amazon.com/images/I/61imYpK33qL._AC_UF1000,1000_QL80_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="NutriPro Juicer Mixer Grinder - Smoothie Maker - 500 Watts (3 Jars 2 Blades)"
            price={1898}
            image="https://m.media-amazon.com/images/I/7152-mn8mKL._SX679_.jpg"
            rating={4}
          />

          <Product
            title="Shivganga Fashion Womens Net Semi-Stitched Lehenga Choli With Dupatta Set"
            price={799}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRp0ev95C3IUujBxp-4q_ySEBU1LjJtjasdGscD3IvErAOnGGVKrXqIC1RR8t8GWWGg9xLhX48u-JD58VtkE2CE1XV2ZDM4e4XsmiDswwE&usqp=CAE"
            rating={4}
          />
          
          <Product
            title="AVSHUB BT21 Plushies"
            price={1424}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQEW_uMXLQX11YUO-yFUcLCZDbb3We0NGuAIkxRUF181NcpxTEuGbXmuKe8ze31wuHulpf7ALvi3Y0qQK287EKgvG3Oxs_2DMcH6fywRxE&usqp=CAE"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Cetaphil Gentle Skin Cleanser |Dry to Normal Skin with Niacinamide |Dermatologist Recommended"
            price={283}
            rating={5}
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8w5CVDYktwBHG6se-nefnd0DCZMLlYbt60-MDPjwZJfwVPKLExXZCqKLpOBzfDq8iOKtHS1iJb3RL1m5U_KAgLpzF9ek83xfiXxXRiqfXxn4tLRQFVVbC&usqp=CAE"
          />

          <Product
            title="boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
            price={1099}
            rating={5}
            image="https://m.media-amazon.com/images/I/41nzykE3sIL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
