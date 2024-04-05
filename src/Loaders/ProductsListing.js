import React from 'react'

export default function ProductsListingLoader() {
  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {
    Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="h-64 bg-gray-100 mb-4 rounded-lg"></div>
    ))
    }
    </div>
</div>
  )
}
