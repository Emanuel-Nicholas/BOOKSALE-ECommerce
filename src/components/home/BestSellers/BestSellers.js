import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Colleen Hoover It Ends with Us Boxed Set"
          price="1,959.00"
          color="Mixed"
          badge={false}
          des="In the #1 New York Times bestselling TikTok sensation It Ends with Us, Lily is overwhelmed with passion for the 
          inflexible and proud Ryle. But her too-good-to-be-true romance is suddenly a lot more complicated when her first love, 
          Atlas, suddenly comes back into her life."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="The Alchemist, Gift Edition (Hardcover)"
          price="1,680.00"
          color="Gray"
          badge={false}
          des="Paulo Coelho's masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel 
          in search of a worldly treasure as extravagant as any ever found."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money"
          price="1,061.00"
          color="Mixed"
          badge={false}
          des="The book explodes the myth that you need to earn a high income to be rich and explains the difference 
          between working for money and having your money work for you."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="The Subtle Art of Not Giving a F*ck"
          price="845.00"
          color="Black"
          badge={false}
          des="In this generation-defining self-help guide, a superstar blogger cuts through the crap to 
          show us how to stop trying to be positive all the time so that we can truly become better, happier people."
        />
      </div>
    </div>
  );
};

export default BestSellers;
