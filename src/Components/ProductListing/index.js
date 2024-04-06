import React, {useState, useEffect, useRef} from "react";
import ProductListingView from "./ProductListingView";
import Pagination from "../Pagination";
import get from 'lodash/get'
import isEmpty from "lodash/isEmpty";
import ProductsListingLoader from "../../Loaders/ProductsListing";
import PageWrapper from "../../Wrapper/PageWrapper";

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError]=useState(null)
    const ref=useRef({ totalPages: 0 });
    const productsPerPage = 10;

    const onPageChange = page => {
        setProducts([])
        setCurrentPage(page);
    };

    useEffect(() => {
      fetchProducts();
    }, [currentPage]);
  
    const fetchProducts = async () => {
     fetch(`https://dummyjson.com/products?skip=${(currentPage-1)*productsPerPage}&limit=${productsPerPage}`)
      .then(res => res.json())
      .then((data)=>{
      setProducts(get(data,'products',[]));
      ref.current.totalPages=get(data,'total',0)/productsPerPage;
      }).catch (error=>{
        setError(error)
      })
    };



    return (
        <div>
          <PageWrapper error={error}  loading={isEmpty(products)} loaderComp={<ProductsListingLoader/>}>
            <ProductListingView products={products}/>
            <Pagination currentPage={currentPage} totalPages={ ref.current.totalPages} onPageChange={onPageChange} />
          </PageWrapper>
        </div>
    );
    
    
  };

  export default ProductListing