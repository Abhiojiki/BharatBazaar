import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { addToCart } from '../store/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function ProductCardMain({item}) {
const dispatch = useDispatch()
const imageUrl = item.image.split(',')[0].slice(2,-1);

  function addproduct(item){
      dispatch(addToCart(item));
  }
  return (
    <div>
      <div 
                  className="card1 flex flex-col 
               items-center  min-w-[200px] "
                >
                  <div className=" md:flex-1  rounded-md border-slate-200 border-2 p-5 relative group min-h-[225px]  w-full flex items-center justify-center ">
                    <div className=" flex-col w-11 z-100  absolute right-0 hidden group-hover:block  bottom-40 ">
                      <div className="bg-red-500 flex justify-center items-center text-3xl text-white h-10 ">
                        <button onClick={()=>addproduct(item)}>
                          <IoMdAdd />
                        </button>
                      </div>
                      <div className="flex justify-center bg-white items-center text-xl text-black h-10">
                        <button>
                        <IoEyeSharp />
                        </button>
                      </div>

                    </div>
                    <div className="flex flex-col ">
                      <div className="thumbnail">
                        <img
                          className="object-cover max-h-[180px] "
                          src={imageUrl}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="info sm:pt-1 w-full  ">
                
                    <div className="mt-1 p-2 ">
                    <Link to ={`product/${item.id}`} >
                    <div className="text-slate-700 max-h-[42px] min-h-[41px] overflow-hidden">
                      <h2 >{item.product_name}</h2>
                      </div>
                      </Link>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.brand}
                      </p>

                      <div className="mt-3 flex items-end justify-between">
                        <p>
                          <span className="text-lg font-bold text-orange-500 ">
                          {item.retail_price}Rs
                          </span>
                         </p>

                        {/* <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-orange-400 group-hover:text-orange-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
    
    </div>
  )
}

export default ProductCardMain