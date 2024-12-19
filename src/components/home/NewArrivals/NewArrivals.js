import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Harry Potter Books Set #1-7"
            price="10,995.00"
            color="Mixed"
            badge={true}
            des="The Harry Potter Hardcover Boxed Set includes J.K. Rowling's seven phenomenal Harry Potter books in hardcover, 
            housed in a collectible trunk-like box with sturdy handles, lockable lid, and bonus decorative sticker set."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Percy Jackson and the Olympians 5-Book Set"
            price="1,899.00"
            color="Mixed"
            badge={true}
            des="All five books in the blockbuster Percy Jackson and the Olympians series, in paperback, 
            collected in a boxed set fit for demigods, complete with a bonus poster!"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Marvel Encyclopedia: Updated and Expanded"
            price="2,600.00"
            color="Mixed"
            badge={true}
            des="Timed perfectly with Marvel's 75th Anniversary, DK's bestselling Marvel Encyclopedia is now fully revised, 
            extended, and updated.Bring the Marvel Universe home with this all-inclusive encyclopedia detailing 
            little-known facts and information about the iconic Marvel characters."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Guinness World Records 2025"
            price="1,399.00"
            color="Mixed"
            badge={true}
            des="Filled with thousands of awesome facts and feats for the whole family, this year’s edition celebrates 
            Guinness World Records’ 70th anniversary Features special US introductory chapter on American heroes from every state"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Hunger Games 4-Book Box Set (Paperback)"
            price="3,470.00"
            color="Mixed"
            badge={true}
            des="With all four of Suzanne Collins's Hunger Games novels in one box set, you can step into the world of Panem with 
            the 10th annual Hunger Games, and continue all the way to the electrifying conclusion."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
