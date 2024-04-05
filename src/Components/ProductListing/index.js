import React,{useState,useEffect} from "react";
import ProductListingView from "./ProductListingView";

const ProductListing = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data)=>{
      setProducts(data?.products);
      console.log("data is ",data?.products)
      }).catch (error=>{
        console.error('Error fetching product details:', error);
      })
    };
  
    return (
        <ProductListingView products={products}/>
    );
    
    
  };

  export default ProductListing