import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

function CategoriesNav() {
  const categories = [
    "Clothing",
    "Jewellery",
    "Automotive",
    "Home Furnishing",
    "Mobiles & Accessories",
  ];

  function handleencode(items) {
    return encodeURIComponent(items);
  }
  return (
    <>
      {/* <div>
   <div className= " hidden lg:flex  h-[800px] p-2 px-3 w-56">
    
     
    <ul className='flex flex-col gap-y-4 items-start w-full uppercase text-sm'>
    <div className='flex flex-col w-full normal-case text-2xl font-bold py-3'>All Categories</div>

   { categories.map((items,index)=>(

    <div key={index}>
    <button className="btn-default overflow-hidden relative 
     w-40 bg-stone-100 text-gray-900 py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-300 hover:bg-gradient-to-t hover:from-stone-200 before:to-stone-50 hover:-translate-y-[3px] ">

     <Link to={`/CategoryPage/${handleencode(items)}`}>
     <span className="relative">{items}</span>
     </Link>
  
 </button>
</div>
   ))
   
   }
   
  


</ul>
    </div>
    </div> */}

      <div>
        <div className="bg-slate-900 py-4 text-white item-center justify-center  sm:py-4 rounded-lg">
          <div
            className="sm:hidden flex items-center 
            text-2xl"
          >
          <div className="flex flex-col group items-center justify-center mx-3 relative  ">
            <div className="flex items-center justify-center ">
              <div className="text-bold text-lg mr-4">Categories</div>
              <div className="text-xl relative top-1 ">
                <button>
                  <IoIosArrowDown />
                </button>
              </div>
            </div>
            <div className="group-hover:flex flex-col hidden group-hover:left-2 group-hover:relative">
              {categories.map((items, index) => (
                <div key={index}>
                  <button className="btn-default  text-sm ">
                    <Link to={`/CategoryPage/${handleencode(items)}`}>
                      <span className="relative">{items}</span>
                    </Link>
                  </button>
                </div>
              ))}
            </div>
            </div>
          </div>

          <div className="text-md gap-x-8 font-semibold   w-full  justify-center hidden  sm:flex ">
            {categories.map((items, index) => (
              <div key={index}>
                <button className="btn-default  ">
                  <Link to={`/CategoryPage/${handleencode(items)}`}>
                    <span className="relative">{items}</span>
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesNav;
