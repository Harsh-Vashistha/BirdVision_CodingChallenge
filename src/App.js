import React from 'react';
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';

import ErrorPage from "./Components/ErrorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <ProductListing />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/products/:productId",
    element: <ProductDetails />,
    errorElement: <ErrorPage />,
  },
]);


const App = () => {
  return (
     <div className="container mx-auto p-4">
      <RouterProvider router={router}  basename="/BirdVision_CodingChallenge"/>
     </div>

  );
};

export default App;
