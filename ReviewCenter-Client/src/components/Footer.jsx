import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" w-full bg-blue-900 py-6 bottom-0 left-0 mb-0">
        <div className="container mx-auto px-6 py-6 flex flex-col">
          <div className=" mb-4">
            <div className="flex flex-row justify-between mb-8">
              <div className="logo flex flex-col">
                <h3 className="text-white text-xl sm:text-2xl mr-2">
                  Review Center
                </h3>
                <div className="py-2 text-yellow-500">
                  <i className="fas fa-star text-2xl"></i>
                  <i className="fas fa-star text-2xl"></i>
                  <i className="fas fa-star text-2xl"></i>
                  <i className="fas fa-star text-2xl"></i>
                  <i className="fas fa-star text-2xl"></i>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between mb-8">
              <div className="flex flex-col w-2/5 mb-8">
                <h2 className="text-xl mb-4 text-white">About</h2>
                <ul className="text-gray-500 font-thin">
                  <li className="mb-3">About us</li>
                  <li className="mb-3">Jobs</li>
                  <li className="mb-3">Contact</li>
                  <li className="mb-3">Blog</li>
                  <li className="mb-3">Press</li>
                </ul>
              </div>
              <div className="flex flex-col w-2/5 mb-8">
                <h2 className="text-xl mb-4 text-white">Community</h2>
                <ul className="text-gray-500 font-thin">
                  <li className="mb-3">Trust in reviews</li>
                  <li className="mb-3">Support Center</li>
                  <li className="mb-3">Log in</li>
                  <li className="mb-3">Sign up</li>
                  <li className="mb-3">Chrome App</li>
                </ul>
              </div>
              <div className="flex flex-col w-2/5 mb-8">
                <h2 className="text-xl mb-4 text-white">Businesses</h2>
                <ul className="text-gray-500 font-thin">
                  <li className="mb-3">ReviewCenter Business</li>
                  <li className="mb-3">Products</li>
                  <li className="mb-3">Plans & Pricing</li>
                  <li className="mb-3">Business Login</li>
                  <li className="mb-3">Blog for Business</li>
                </ul>
              </div>
              <div className="flex flex-col w-2/5 mb-8">
                <h2 className="text-xl mb-4 text-white">Follow us on</h2>
                <ul className="flex flex-col">
                  <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                    <a href="#!">
                      <i className="fab fa-facebook text-2xl"></i>
                    </a>
                  </li>
                  <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                    <a href="#!">
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  </li>
                  <li className="px-1 py-2 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-blue-500">
                    <a href="#!">
                      <i className="fab fa-google text-2xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col w-3/5 ">
                <h2 className="text-xl mb-4 text-white">Choose Country</h2>
                <div className="inline-block relative w-64">
                  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Italy</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <ul className="text-gray-500 font-thin flex flex-col sm:flex-row justify-between">
                <li className="mb-3">Legal</li>
                <li className="mb-3">Privacy Policy</li>
                <li className="mb-3">Terms & Condition</li>
                <li className="mb-3">Guidelines for Reviewers</li>
                <li className="mb-3">System status</li>
                <li className="mb-3">Cookie preferences</li>
              </ul>
            </div>
            <div>
              <p className="text-center text-gray-500 text-xs">
                &copy;2020 ReviewCenter. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
