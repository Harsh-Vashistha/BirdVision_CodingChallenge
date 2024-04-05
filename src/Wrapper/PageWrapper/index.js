import React from "react";


const PageWrapper = ({ loading, error, loaderComp, children }) => {
    if (loading) {
        return loaderComp? loaderComp: <div>... loading</div>;
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Error</h2>
                <p className="text-lg text-gray-600 mb-8">Oops! Something went wrong. Please try again later.</p>
            </div>
        </div>
        );
    }

    return children;
};

export default PageWrapper;
