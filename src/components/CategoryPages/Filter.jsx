import React, {  useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaFilter, FaTags, FaRegMoneyBillAlt } from "react-icons/fa";
import { addProducts } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import ProductList from "../../store/ProductList";
import { useNavigate } from "react-router-dom";

function Filter() {

  const categories = [
    "Clothing",
    "Jewellery",
    "Automotive",
    "Home Furnishing",
    "Mobiles & Accessories",
  ];
 
  const [limit, setLimit]= useState({
    high:10000,
    low:0
  })
  const navigateTo
   = useNavigate();
   const [selectedValue, setSelectedValue] = useState("");
  const [brand, setBrand]= useState("");
  const [selectedbrand, setSelectedbrand]= useState(null);

  const dispatch = useDispatch();
  const priceRangeArray = [0, 1000, 3000, 5000, 15000, 30000, 50000];
  let filteredProducts=[];
  useEffect(()=>{
     filteredProducts= ProductList.filter((item)=>(item.retail_price>=limit.low && item.retail_price<=limit.high));
    dispatch(addProducts(filteredProducts))
  }, [limit,dispatch]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
 

  const handlechangeRange = (a,b ,index=null) => {
  setLimit({high:b, low:a});
  setSelectedPriceRange(index)
  };
  const handleBrand = (brand, index=null)=>{
      setBrand(brand);
      setSelectedbrand(index);
  }

  return (
    <div>
      <div className=" ">

      <ul className="space-y-2 text-sm mb-12">
                    <li className="text-2xl font-bold mb-5">All Categories</li>
                    <div className="dropdown">
                      <select
                        className="outline-none focus:outline-none p-2 bg-white rounded-3xl text-black text-sm w-full "
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
                    </div>
                  </ul>

                  <div className="flex items-center -mb-1">
                <FaRegMoneyBillAlt className="mr-2" />
                <h3 className="text-2xl font-medium">Price Range</h3>
              </div>

        <div className="grid grid-cols-1 my-5 gap-y-2">
          {priceRangeArray.map((item,index,array) => (
            index!==0?
            <div key={index} className="flex items-center mb-2">
              <input
                type="radio"
                name="brand"
                className="mr-2"
              checked={index===selectedPriceRange}
                onClick={() => handlechangeRange(array[index-1], array[index],index)
                 
                }
              />
              <label htmlFor="">{ index===0? `${0} - ${1000}Rs `:` ${array[index-1]} - ${array[index] }Rs`}</label>
            </div>:null
          )
          
          )}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handlechangeRange(0,100000,null)}> Clear Price </button>
        </div>
       

      </div>
      {/* Popular Brands */}
      {/* <div className="mb-6">
        <h3 className="text-lg font-medium">Popular Brands</h3>
        <div className="mt-2">
          {ProductList.slice(0,5).map((brand,index) => (
           
            <div key={index} className="flex items-center mb-2">
              <input type="radio" id={brand} name="brand" className="mr-2" 
                     checked={index===selectedbrand}
                     onClick={() => handleBrand(brand,index)}
              />
              <label htmlFor={brand}>{brand.brand}</label>
            </div>
          )
          )}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={() => handleBrand("",null)}> Clear Brands </button>
          
        </div>
        
      </div> */}

      {/* Popular Tags */}
      {/* <div>
        <div className="flex items-center mb-2">
          <FaTags className="mr-2" />

          <h3 className="text-lg font-medium">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {ProductList.slice(0,5).map((tag, index) => (
           
            <span
              key={index}
              className={`px-3 py-1 rounded-full ${
                index === 0 ? "bg-blue-500" : "bg-gray-600"
              }`}
            >
           {tag.product_specifications}
           
            </span>
           
          ))}
      
        </div>
      </div> */}
    </div>
  );
}

export default Filter;
