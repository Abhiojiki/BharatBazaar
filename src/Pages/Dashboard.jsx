import {React,useState,useEffect} from 'react'
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io"
import { IoTrashBinSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { increaseAmount,removeFromCart, decreaseAmount ,getTotal,getTotalPrice, clearCart} from "../store/cartSlice";


function Dashboard() {

  
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
   <div className="p-6 w-full sm:h-[500px] py-5 ">
    <div className=" text-center  pb-5">
<div className=" w-full flex  justify-between ">

  <div className="flex flex-1 sm:flex-row  pt-5 sm:justify-between flex-col items-center">
    <div className=" w-[170px] h-[180px] flex-col flex  justify-center items-center">
      
      <div className='rounded-full w-32 bg-green-700  '>

        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=""  className='rounded-full ' />
      </div>
      <div className='mt-3 text-3xl text-black font-semibold '>
        Yoo
      </div>
    
      </div>
      <div className='Cart flex  flex-col flex-1   jsutify-center h-[380px]  w-full '>
      <div className='text-black font-semibold font-mono py-4 text-[35px]'>Cart </div>
      <div className="flex gap-x-4 border border-gray-400 text-gray-500 font-light pr-6 overflow-y-scroll h-[200px] justify-center flex-col p-6 pt-72  ">
            {products && products.length>0 ?products.map((product) => (
              <div key={product.id} className="w-full min-h-[150px] flex items-center   ">
                <Link to={`/product/${product.id}`}>
                  <img className="max-w-[45px] me-4" src={imageurl(product)} alt={product.product_name} />
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
                        
                        className="border border-gray-400 p-1 mx-2 hover:cursor-pointer"
                      >
               
                        <IoMdAdd />
                    
                      </div>
                      </button>
                      <div>{product.amount}</div>
                      <button   onClick={() => dispatch(decreaseAmount(product.id))}>
                      <div
                      
                        className="border border-slate-500 p-1 mx-2 hover:cursor-pointer"
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

              <div className="flex flex-row justify-between items-center w-full my-3 p-2 -scroll-mb-96 sm:mb-6  ">
                <div className="font-semibold text-lg">
              Total: {parseFloat(totalAmount).toFixed(2)} Rs
                </div>
                <button onClick={()=>dispatch(clearCart())}>
                <div className="text-xl">
                {/* <IoTrashBinSharp/> */}
                </div>
                </button>
              </div>
            <div className="flex justify-center flex-col gap-y-2 text-sm ">
            
              <div>
              <Link to="/payment">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-2 rounded w-96 ">
           CheckOut
        </button>
        </Link>
              </div>
            </div>

      </div>
  </div>

</div>
    </div>

   </div>
  )
}

export default Dashboard