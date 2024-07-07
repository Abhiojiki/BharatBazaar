import React from 'react';
import Button from './Button';
import { PiX } from 'react-icons/pi';
import { useLayoutEffect,useState } from 'react';

const PaymentButton = () => {
    const [success, setSuccess]= useState(false);
    function loadRazorpay(){
        setSuccess(!success)
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
<>
<div className="w-full h-[350px] flex "> 

<div className="flex flex-col  items-center w-full">
<div className="  mx-auto mt-20">
<Button onClick={loadRazorpay}>
      Pay Now
    </Button>

</div>
{success&& <div className=' mt-5 w-[80%] border border-black h-10 shadow-md shadow-green-600  p-3 text-white font-semibold bg-green-500 rounded-md text-lg flex items-center justify-center text-nowrap' >

    Your order has been successfully submitted. Thank you for your business.
</div>}

</div>

    
    </div>
    </>
  );
};

export default PaymentButton;