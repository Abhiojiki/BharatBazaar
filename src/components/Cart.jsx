
import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io"
import { IoTrashBinSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { increaseAmount,removeFromCart, decreaseAmount ,getTotal,getTotalPrice, clearCart} from "../store/cartSlice";



function Cart({ OpenCart, toggleCart }) {

  const dispatch = useDispatch();
 const cart = useSelector((state)=> state.cart.cart)
 const itemAmount = useSelector((state)=> state.cart.itemAmount)
 const totalAmount = useSelector((state)=>state.cart.total)

 let [products, setProducts] = useState([]);


 useEffect(()=>{
setProducts(cart);
dispatch(getTotal());
dispatch(getTotalPrice());
 },[cart,dispatch])

function imageurl(product){ 
  return product.image.split(',')[0].slice(2,-1)
}

  return (
    <div
      className={`fixed inset-0 z-50 ${
        OpenCart ? "block" : "hidden"
      } bg-black bg-opacity-60`}
    >
      <div className="fixed inset-y-0 right-0 w-88 bg-white sm:w-full sm:max-w-sm overflow-y-scroll  ">
        <div className="flex w-[90%] flex-col items-center justify-center mx-auto">
          <div className="p-4 flex w-full justify-between ">
            <button
              onClick={toggleCart}
              className="mb-4 text-gray-900 focus:outline-none text-3xl "
            >
              <IoMdClose />
            </button>
            <div className="font-semibold text-lg ">Shopping Bag ({`${itemAmount} `})</div>
          </div>

          <div className="flex gap-x-4 border-b border-gray-200 text-gray-500 font-light pr-6 w-full overflow-y-scroll h-[380px] justify-center flex-col p-6 pt-56 ">
            {products && products.length>0 ?products.map((product) => (
              <div key={product.id} className="w-full min-h-[150px] flex items-center   ">
                <Link to={`/product/${product.id}`}>
                  <img className="max-w-[60px] me-4" src={imageurl(product)} alt={product.product_name} />
                </Link>
                <div className="w-full flex flex-col ">
                  <div className="flex justify-between mb-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                    >
                      {product.product_name}
                    </Link>
                    <div
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="text-xl cursor-pointer"
                    >
                      <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex justify-around items-center gap-3">
                    <button onClick={() => dispatch(increaseAmount(product.id))}>
                      <div
                        
                        className="border border-gray-400 p-2 mx-2 hover:cursor-pointer"
                      >
               
                        <IoMdAdd />
                    
                      </div>
                      </button>
                      <div>{product.amount}</div>
                      <button   onClick={() => dispatch(decreaseAmount(product.id))}>
                      <div
                      
                        className="border border-slate-500 p-2 mx-2 hover:cursor-pointer"
                      >
                        <IoMdRemove />
                      </div>
                      </button>
                    </div>
                    <div className="font-bold">{`${product.retail_price} Rs`}</div>
                  </div>
                </div>
              </div>
            )):null}
          </div>

              <div className="flex flex-row justify-between items-center w-full my-3 p-2">
                <div className="font-semibold text-lg">
              Total: {parseFloat(totalAmount).toFixed(2)} Rs
                </div>
                <button onClick={()=>dispatch(clearCart())}>
                <div className="text-xl">
                <IoTrashBinSharp/>
                </div>
                </button>
              </div>
            <div className="flex justify-center flex-col gap-y-2">
            <Link to= "/Dashboard">
            <div className="w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-72" onClick={toggleCart}>
           View Cart 
        </button>
            </div>
            </Link>
              <div>
              <Link to={"/payment"}>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-72 " onClick={toggleCart}>
           CheckOut
        </button>
        </Link>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
