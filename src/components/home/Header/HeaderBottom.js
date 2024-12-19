import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";

const HeaderBottom = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false); // Popup visibility state for Sign In
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // Popup visibility state for Sign Up
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#126c1b] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-white"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal text-white">Shop by Category</p>
            {show && (
              <motion.ul
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-16 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                {/* Category List */}
                {[
                  "Children Books",
                  "Religion & Philosophy",
                  "Fiction",
                  "Romance",
                  "Self-Help",
                  "Light Novels",
                  "Comics",
                  "Magazine",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) & setSearchQuery("") // Clear the search query
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">{item.productName}</p>
                        <p className="text-xs">{item.des}</p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div
              onClick={() => setShowUser(!showUser)}
              className="flex text-white"
            >
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <li
                  onClick={() => setIsSignInOpen(true)} // Open Sign In popup
                  className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                >
                  Sign In
                </li>
                <li
                  onClick={() => setIsSignUpOpen(true)} // Open Sign Up popup
                  className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                >
                  Sign Up
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Profile
                </li>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative text-white">
                <FaShoppingCart />
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-black text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </Flex>
      </div>

      {/* Sign In Popup */}
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsSignInOpen(false)} // Close on background click
          ></div>
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="john@workemail.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button className="w-full bg-[#126c1b] text-white py-2 rounded-md hover:bg-black duration-300">
                Sign In
              </button>
              <p className="mt-4 text-sm text-center">
               Don't have an account?{" "}
             <span
            onClick={() => setIsSignUpOpen(true)} // Open Sign Up popup
            className="text-blue-600 hover:underline cursor-pointer"
            >
             Sign Up
            </span>
            </p>
            </form>
          </div>
        </div>
      )}

{isSignUpOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={() => setIsSignUpOpen(false)} // Close on background click
    ></div>
    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
      <button
        onClick={() => setIsSignUpOpen(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
      >
        &times;
      </button>
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>

      {/* State to control the current step */}
      {currentStep === 1 && (
        <form>
          {/* Step 1: Email, Full Name, Password, Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="John Doe"
              // Add state or handlers for this field
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="john@example.com"
              // Add state or handlers for this field
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              // Add state or handlers for this field
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
              // Add state or handlers for this field
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-[#126c1b] text-white py-2 rounded-md hover:bg-gray duration-300"
              onClick={() => setCurrentStep(2)} // Proceed to Step 2
            >
              Next
            </button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form>
          {/* Step 2: Address, City, Country, Zip Code */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Address</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="123 Main St"
              // Add state or handlers for this field
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">City</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="City"
              // Add state or handlers for this field
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Country</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Country"
              // Add state or handlers for this field
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Zip Code</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="12345"
              // Add state or handlers for this field
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-500 duration-300 mb-2"
              onClick={() => setCurrentStep(1)} // Go back to Step 1
            >
              Back
            </button>
            <button
          type="submit"
          className="w-full text-white py-2 rounded-md duration-300 relative overflow-hidden animate-rainbow"
          style={{
          background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          backgroundSize: "300%",
          }}
          >
          Submit
          </button>
          </div>
        </form>
      )}
    </div>
  </div>
)}


    </div>
  );
};

export default HeaderBottom;
