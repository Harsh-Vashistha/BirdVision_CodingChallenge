import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav className="flex justify-center mt-4">
            <ul className="flex space-x-2">
                {pages.map(page => (
                    <li key={page}>
                        <button
                            className={`px-3 py-1 rounded-lg ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
