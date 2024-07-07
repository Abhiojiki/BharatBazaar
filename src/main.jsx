import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import App1 from './App1.jsx'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import CheckOut from "./Pages/CheckOut.jsx";
import { Login, SignUp, Dashboard, ErrorPage,ProductDetail } from "./Pages/index.js";
import AppLayout from "./AppLayout";
import App from "./App";
import CategoryPage from "./components/CategoryPages/CategoryPage.jsx";
import Protected from "./components/AuthLayout.jsx";
import PaymentButton from "./components/PaymentButton.jsx";


/*!SECTION
  <Route path="/" element={<AppLayout/>}>
        <Route path=""element={<App/>} />
        
        <Route path="/login"element={<Login/>} />
        <Route path="/signUp"element={<SignUp/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/ErrorPage" element={<ErrorPage/>}/>
        <Route path="/CategoryPage/:encodedItems" element={<CategoryPage/>}>
        
       
        </Route>
*/


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
    </Protected>
        ),
      },
      {
        path: "/signUp",
        element: (
          <Protected authentication={false}>
            <SignUp />
    </Protected>
        ),
      },
      {
        path: "/Dashboard",
        element: (
         <Protected authentication>
          
            <Dashboard />
       </Protected>
        ),
      },
      {
        path:"/CheckOut",
        element:(
          <Protected authentication>
        <CheckOut/>

          </Protected>
        )
      },
      {
        path: "/CategoryPage/:encodedItems",
        element: <CategoryPage />,
      },
      {
        path:"/product/:id",
        element:<ProductDetail/>,
      },
      {
        path:"/payment",
        element:<PaymentButton/>,
      }
      
    ],
  },
]);

const main = () => {
 
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
        {/* <App1/> */}
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
