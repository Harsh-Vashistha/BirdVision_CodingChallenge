import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductDetailsView from "./ProductDetailsView";
import PageWrapper from "../../Wrapper/PageWrapper";
import ProductDetailsLoader from "../../Loaders/ProductDetails";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchProductDetails(productId);
    }, [productId]);

    const fetchProductDetails = async (productId) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const LoaderComp=()=>(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductDetailsLoader />
            <ProductDetailsLoader />
        </div>
    )

    return (
        <PageWrapper error={error}  loading={loading} loaderComp={<LoaderComp/>}>
            <ProductDetailsView product={product}/>
        </PageWrapper>
    );
    
};

export default ProductDetails;
