import React, { useEffect ,useState} from "react";
import Button from "./Button";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

function imageExists(url) {
  return new Promise(resolve => {
    if (!url) {
      resolve(false);
      return;
    }

    var img = new Image();
    img.addEventListener('load', () => resolve(true));
    img.addEventListener('error', () => resolve(false));
    img.src = url;
  });
}



function ProductCard({item}) {

  const dispatch = useDispatch()

  function addproduct(item){
      dispatch(addToCart(item));
  }
  const [imageExistsState, setImageExistsState] = useState(false);
  const imageUrl = item.image.split(',')[0].slice(2,-1);


  useEffect(() => {

    imageExists(imageUrl)
      .then((exists) => {
        if (exists) {
          setImageExistsState(exists);
        
        }
        else{
          setImageExistsState(false);
        }
      })
      .catch((error) => console.log(error));

 
  }, [imageUrl]);

  return (

    

    // imageExistsState&&<div className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105 ">
      imageExistsState&&<div className="relative bg-white border rounded-lg shadow-md  transform transition duration-500 hover:scale-105 ">
 <div className="">
  <div className="p-2 flex justify-center relatives group  ">
    <a href="#">
      <img
        className="rounded-md object-cover object-top sm:w-[250px] sm:h-[200px]  h-[300px] xsm:w-[300px] "
        src={imageUrl}
        loading="lazy"
      />
    </a>

    <div className=" flex-col w-11 z-100  absolute right-0 hidden group-hover:block ">
                      <div className="bg-red-500 flex justify-center items-center text-3xl text-white h-10">
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
  </div>

  <div className="px-4 pb-3 h-[150px ] overflow-hidden flex flex-col gap-y-3">
    <div className="flex flex-col justify-start">
    <Link
                      to={`/product/${item.id}`}>
        {/* <h5 className="text-lg font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 h-[50px] overflow-hidden   text-gray-900 dark:text-white "> */}
        <h5 className="text-lg font-semibold tracking-tight text-black hover:text-violet-300 h-[50px] overflow-hidden    ">
         {item.product_name}
        </h5>
        </Link>
      <p className="antialiased  text-gray-800 text-sm break-all h-[54px] overflow-hidden">
       {item.description.slice(0,80)}
      </p>
    </div>
    <div className="flex justify-between items-center font-semibold">
    <div className="text-2xl text-blue-900" >
      {item.retail_price}Rs
    </div>
   
    </div>
  </div>
  </div>
</div>

  );
}

export default ProductCard;