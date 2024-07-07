import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { FaFilter, } from "react-icons/fa";
import { Link } from "react-router-dom";
import Filter from "./CategoryPages/Filter";
import { useNavigate } from "react-router-dom";

function SideMenu({ isOpen, toggleSidebar }) {
  const [price, setPrice] = useState(50000); // Default
  const categories = [
    "Clothing",
    "Jewellery",
    "Automotive",
    "Home Furnishing",
    "Mobiles & Accessories",
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const navigateTo = useNavigate();
  // console.log(location);
  const isCategoryPage = location.pathname.startsWith("/CategoryPage");

  function handleencode(items) {
    return encodeURIComponent(items);
  }

  return (
    <div>
      <>
        <div
          className={`fixed inset-0 z-50 ${
            isOpen ? "block" : "hidden"
          } bg-black bg-opacity-40 `}
        >
          <div className="fixed inset-y-0 left-0 w-64 bg-white sm:w-full sm:max-w-sm overflow-y-scroll">
            <div className="p-4 ">
              <button
                onClick={toggleSidebar}
                className="mb-4 text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                <IoMdClose />
              </button>

              {!isCategoryPage ? (
                <ul className="space-y-2 text-sm">
                  <li className="text-2xl font-bold mb-5">All Categories</li>
                  {categories.map((items, index) => (
                    <li key={index} className="text-lg font-semibold">
                      <Link to={`/CategoryPage/${handleencode(items)}`}>
                        <span>{items}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div>
                  <ul className="space-y-2 text-sm">
                    {/* <li className="text-2xl font-bold mb-5">All Categories</li>
                    <div className="dropdown">
                      <select
                        class="outline-none focus:outline-none p-2 bg-white rounded-3xl text-black text-sm w-full "
                        value={selectedValue}
                        onChange={(e) => {
                          setSelectedValue(e.target.value);
                          navigateTo(`/CategoryPage/${e.target.value}`);
                        
                        }}
                      >
                        {categories.map((items, index) => (
                          <option key={index} value={items}>
                            {items}
                          </option>
                        ))}
                      </select>
                    </div> */}
                  </ul>
                  <div className="filters flex ">
                    <div className="w-full ">
                      <div className="flex flex-col  p-4  text-black text-sm ">
                        <div className="flex items-center mb-6">
                          <FaFilter className="mr-2" />
                          <h2 className="text-xl font-semibold">Filters</h2>
                        </div>

                        {/* Price Range Slider */}
                     
                   <Filter/>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default SideMenu;
