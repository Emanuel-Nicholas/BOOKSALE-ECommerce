import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Game of Thrones 5-Copy Boxed Set, Export Edition (Paperback)"
          price="2,562.00"
          color="Blank and White"
          badge={true}
          des="For the first time, all five novels in the epic fantasy series that inspired HBO’s Game of Thrones are together in one boxed set."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Little Women: Signature Classics (Hardcover)"
          price="1,329.00"
          color="Gray"
          badge={false}
          des="Immensely popular from the day it was published, Little Women struck a chord with generations of young American women,
          demonstrating that women can pursue their dreams freely without compromising their values."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="The Lord of the Rings Boxed Set (Paperback)"
          price="1,750.00"
          color="Mixed"
          badge={true}
          des="No other writer has created a world as distinct as Middle-earth, complete with its own geography, history, languages, and
          legends. And no one has created characters as endearing as Tolkien's large-hearted, hairy-footed hobbits."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Diary of a Wimpy Kid: New Edition (Hardcover)"
          price="839.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
