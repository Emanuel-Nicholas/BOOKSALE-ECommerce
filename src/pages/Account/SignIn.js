import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  // States for form inputs and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // State to control popup visibility (default is true for direct popup)
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  // Handlers for input fields
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }

    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="relative">
      {/* Background Blur */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm ${
          isPopupOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsPopupOpen(false)} // Optional: Close when background is clicked
      ></div>

      {/* Sign In Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>

            {successMsg ? (
              <div className="text-green-500 text-center font-medium">
                {successMsg}
              </div>
            ) : (
              <form>
                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="john@workemail.com"
                  />
                  {errEmail && <p className="text-red-500 text-sm">{errEmail}</p>}
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-red-500 text-sm">{errPassword}</p>
                  )}
                </div>

                <button
                  onClick={handleSignUp}
                  className="w-full bg-primeColor text-white py-2 rounded-md hover:bg-black duration-300"
                >
                  Sign In
                </button>
                <p className="mt-4 text-sm text-center">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
