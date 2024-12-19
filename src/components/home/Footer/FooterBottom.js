import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#126c1b] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm text-white">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex text-white">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | BOOKSALE | All Rights Reserved |
          <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-white">
              Powered by React
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
