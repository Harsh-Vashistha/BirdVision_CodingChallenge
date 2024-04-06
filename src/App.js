import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import OfflineWrapper from './Wrapper/OfflineWrapper';

import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
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
      <OfflineWrapper>
      <RouterProvider router={router}  basename="/BirdVision_CodingChallenge"/>
      </OfflineWrapper>
     </div>

  );
};

export default App;
