import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">BOOKSALE</span>{" "}
          We are the country’s biggest source of low-priced unused, as well as previously-owned, 
          books and bargain publications from the U.S., Canada, Australia and the UK. We are also a 
          major distributor of locally-printed slick Pinoy magazines in both English and Pilipino.
          <br /><br />

          Our product assortment far exceeds the offerings of our competition, unmatched by any other 
          bookstore chain in the country.We cater to the individual lifestyle of each member of the family: 
          to kids and teens, to fathers, mothers and and single adults. To a lot of progressive, intellectual families,
          a BOOKSALE group visit is a much - awaited event.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
