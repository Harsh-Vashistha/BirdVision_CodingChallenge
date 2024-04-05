import React from 'react'
import {  Link } from 'react-router-dom';

export default function ProductListingView({products}) {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-8 text-center">Products Listing Page</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products !== null && products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md">
                <Link to={`/products/${product.id}`} className="flex flex-col h-full">
                    <div className="relative aspect-w-1 aspect-h-1">
                        <div className="w-full h-full rounded-t-lg overflow-hidden">
                            <img src={product.thumbnail} alt={product.title} className="object-cover object-scale-down h-48 w-96" />
                        </div>
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                            <div className="font-semibold text-lg mb-2">{product.title}</div>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="font-semibold text-lg">${product.price}</div>
                            {product.discountPercentage && (
                                <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs ml-2">{product.discountPercentage}% off</div>
                            )}
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
</div>
  )
}
