import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxMagnifyingGlass } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import SideMenu from "./SideMenu.jsx";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authGoogle from "../appwrite/authGoogle.js";
import { logout as authLogout } from "../store/authSlice.js";
import Cart from "./Cart.jsx";

function Navbar() {

  const itemAmount = useSelector(state =>state.cart.itemAmount)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [ProfileMenu, setProfileMenu] = useState(false);

  const [OpenCart, setOpenCart] =useState(false);
  const toggleCart=()=>{
    setOpenCart(!OpenCart);
  }

  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const toggleProfileMenu = () => {
    setProfileMenu(!ProfileMenu);
  };
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    authGoogle.logout().then(() => {
      dispatch(authLogout());
    });
  };

  return (
    <>
     <Cart  OpenCart={OpenCart} toggleCart={toggleCart}/>
      <div className="  w-full h-16  bg-white">
     

        <div className="flex  h-16 justify-between px-4 items-center">
          <Link to={"/"}>
            <div className="flex justify-center  text-slate-600 gap-x-2 text-lg ">
              <div className="w-9 h-7 ">
                <img src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000" />
              </div>
              <div className="text-3xl">BharatBazzar</div>
            </div>
          </Link>
          <div className="text-slate-600 hidden lg:flex font-semibold gap-x-3 text-md  ">
        
          </div>
          <div className=" usermenu flex items-center gap-x-3 ">
            <div className=" md:flex">
              {/* <div className=" gap-x-4 flex-col   sm:flex-row  text-slate-600 flex-initial  hidden md:flex ">
                <input
                  type="text"
                  placeholder=" What you looking for?"
                  className=" lg:w-72 md:w-48 shrink
                                    rounded-md 
                                    py-[5px] focus:outline-none  px-2 bg-slate-200 placeholder:text-xs 
                                    text-slate-600 placeholder:text-gray-500"
                />
                <button
                  type="button  "
                  className=" relative right-9 text-black text-xl "
                >
                  <RxMagnifyingGlass />
                </button>
              </div> */}
              <div className="flex flex-col sm:flex-row items-center justify-center   navigation  text-slate-600 md:gap-x-3 lg:me-0 md:pe-5 ">
               <button onClick={toggleCart} className="text-3xl block font-semibold relative " >
               <div className="absolute rounded-full w-5 bg-red-600 top-4 left-5 h-5">
               <span className="text-white font-semibold text-sm flex items-center justify-center"> {itemAmount}</span>
                </div>
                  <MdOutlineShoppingCart />
                  </button>
                  <div className="md:flex hidden">
                {/* <a href="" className="text-2xl" target="_blank">
                  <FaRegHeart />
                </a> */}
                </div>
              </div>
            </div>

            <div className=" flex lg:hidde text-slate-600 text-[35px] rounded-sm justify-items-end shrink self-center ">
              <button onClick={toggleSidebar}>
                <IoMenuOutline />
              </button>

              <SideMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className="flex flex-col gap-y-2 opacity-70 relative">
              <button className="text-[23px] " onClick={toggleProfileMenu}>
                <FaRegUserCircle />
              </button>
          
            
              <div
                className={` ${
                  ProfileMenu ? "block" : "hidden"
                } bg-slate-200 w-24  absolute right-2 top-6 rounded-md shadow-lg  font-semibold `}
                  >
              
                <div className="border-b-2 w-full h-8 border-slate-0 text-black text-sm font-semibold relative hover:shadow-md text-center flex justify-center items-center ">
                  <button
                    onClick={() => {
                      if (authStatus) {
                        navigate("/Dashboard");
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    Profile
                  </button>
                </div>

          
              
                {/* <div className="border-b-2 w-full h-8 border-slate-0 text-black text-sm font-semibold relative hover:shadow-md text-center  flex  justify-center items-center    md:hidden">
                  <button>WishList</button>
                </div>
 */}

                <div className="border-b-2 w-full h-8 border-slate-0 text-black text-sm font-semibold relative hover:shadow-md text-center flex justify-center items-center">
                  <button onClick={authStatus ? handleLogout : handleLogin}>
                    {authStatus ? "Logout" : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
