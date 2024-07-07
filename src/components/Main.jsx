import React, { useEffect } from "react";
import Container from "./container/Container.jsx";
import CategoriesNav from "./container/CategoriesNav.jsx";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { pushAllProducts } from "../store/TopProductsSlice.js";
import ProductList from "../store/ProductList.js";
import ProductCardMain from "./ProductCardMain.jsx";

function Main() {
  // const [AllTopProduct ,setAllTopProduct] = useState([]);
  // const mockarr = useSelector(state => state.TopProduct.allProduct);
  const mockarr =ProductList.slice(0,20);
  const dispatch = useDispatch();
  // console.log(mockarr)

  // useEffect(() => {
  //   function caller() {
  //     fetch('https://dummyjson.com/products?limit=10&skip=20&select=id,title,price,images,description,rating,brand,category,thumbnail')
  //       .then(res => res.json())
  //       .then(out => dispatch(pushAllProducts(out)));
  //   }
  //   caller();
   
  // }, [dispatch]);
  

  
  // useEffect(() => {
  //   console.log(mockarr);
  // }, [mockarr]);

  return (
    <Container>
      {/* <Sample/> */}
      <div className="flex flex-col ">
      <div>
       <CategoriesNav/>
</div>
        <div className="w-[100%]  flex flex-col items-center justify-center h-[auto] overflow-x-hidden">
          <div className=" my-6">
            <img
              src="https://cdn.printnetwork.com/production/assets/5966561450122033bd4456f8/imageLocker/blog-description/blog/sales_banners.jpg"
              alt=""
            />
          </div>

          {/*SECTION - Hello this is FlashSale*/}

          <div className="FlashSalew-full px-3  mb-16 h-auto w-full">
            <div className="flex justify-between w-full items-center mb-5">
              <div className="flex justify-between items-center w-full ">
                <div className="font-bold text-4xl ">Flash Sale </div>
                <div>
                 
                </div>
              </div>
            </div>

            <div className=" flex w-full gap-x-4 ">
              {mockarr ? mockarr.slice(5,9).map((item) => (
               

              <ProductCardMain key={item.id} item={item}/>
              )):<p>.....Loading.</p>}
            </div>
          </div>
          {/* SECTION - This is ending Featured Sales*/}

          {/*This is Section 2*/}

          <div className="FlashSalew-full px-3  mb-16 h-auto w-full">
            <div className="flex justify-between w-full items-center mb-5">
              <div className="flex justify-between items-center w-full ">
                <div className="font-bold text-4xl "> Best Selling</div>
                <div>
                 
                </div>
              </div>
            </div>

            <div className=" flex w-full gap-x-4 ">
            {mockarr ? mockarr.slice(10,14).map((item) => (
               

               <ProductCardMain key={item.id} item={item}/>
               )):<p>.....Loading.</p>}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Main;
