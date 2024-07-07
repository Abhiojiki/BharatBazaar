import { useState } from 'react'
import Main from './components/Main'
import './App.css'
import SideMenu from './components/SideMenu'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { useEffect } from 'react'
import {login, logout} from './store/authSlice.js'
import { pushAllProducts } from './store/TopProductsSlice.js'

function App() {
  // const [count, setCount] = useState(0)
// console.log(import.meta.env.VITE_APPWRITE_URL);
const [loading, setLoading] = useState(true)


const dispatch = useDispatch();

  useEffect(() => {
    function caller() {
      fetch('https://dummyjson.com/products?limit=10&skip=20&select=title,price,images')
        .then(res => res.json())
        .then(out => dispatch(pushAllProducts(out)));
    }
    caller();
   
  }, [dispatch]);
  


useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))
}, [])


  return(
    <>
<div className='   '>

<Main/> 

</div>
<SideMenu/>
    
    </>
  )
}

export default App
