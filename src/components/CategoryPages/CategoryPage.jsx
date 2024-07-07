import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { FaFilter, FaTags, FaRegMoneyBillAlt } from "react-icons/fa";

import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import ProductList from "../../store/ProductList";
import Filter from "./Filter";
import { useSelector } from 'react-redux';




function CategoryPage() {
  const [price, setPrice] = useState(50000); // Default price
  const { encodedItems } = useParams();
  const items = decodeURIComponent(encodedItems);
  // console.log(items);

  const ProductList1 = useSelector((state) => state.products.products
);
let filteredList = ProductList1.length>1? ProductList1.filter(
  (item) => item.product_category_tree === items
): ProductList.filter(
  (item) => item.product_category_tree === items
)


// ( imageExists("http://img5a.flixcart.com/image/t-shirt/w/x/t/dlhbb445-beige-black-gyellow-purple-dongli-10-11-years-original-imaehb54gxhchxcd.jpeg"))
// .then(exists => console.log(exists))
// .catch(error => console.error(error));





  return (
    <>
      <div className="w-full bg-slate-100 px-3 mt-3 mb-2 h-14">
        <div className="flex justify-between  w-full items-center h-[100%]">
          <div className="flex justify-between items-center w-44">
            <div className="font-semibold text-xl w-full text-nowrap">{items} ({filteredList.length})</div>
            
          </div>

        
        </div>
      </div>

      <div className="flex gap-x-3  w-full p-3 my-5  h-auto">
        {/* SECTION Sidebar */}
        <div className="w-64  hidden md:block">
          <div className="flex flex-col w-64 p-4  text-black ">
            <div className="flex items-center mb-6">
              <FaFilter className="mr-2" />
              <h2 className="text-xl font-semibold">Filters</h2>
            </div>

            {/* Price Range Slider */}
           
            {/* Popular Brands */}
         <Filter/>
       

            {/* Popular Tags */}
            
          </div>
        </div>
        {/* !SECTION Sidebar ended */}
        <div className="flex flex-1">
        <div className="grid gap-8  grid-cols-1  xsm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-2 xl:p-5">

            {filteredList.map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
