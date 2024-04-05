import React from 'react'

export default function ProductDetailsView({product}) {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Product Details Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <img src={product.thumbnail} alt={product.title} className="w-full mb-4 rounded-lg sm:object-scale-down h-72 w-96" />
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 mb-4">{product.description}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="font-bold text-xl mb-4">Product Details</div>
                <div className="mb-2">Price: ${product.price}</div>
                <div className="mb-2">Discount Percentage: {product.discountPercentage}%</div>
                <div className="mb-2">Rating: {product.rating}</div>
                <div className="mb-2">Brand: {product.brand}</div>
                <div>Category: {product.category}</div>
            </div>
        </div>
    
</div>
  )
}
