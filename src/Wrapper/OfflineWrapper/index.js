import React, { useState, useEffect } from "react";

const OfflineWrapper = ({ children }) => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener("online", handleOnlineStatusChange);
        window.addEventListener("offline", handleOnlineStatusChange);

        return () => {
            window.removeEventListener("online", handleOnlineStatusChange);
            window.removeEventListener("offline", handleOnlineStatusChange);
        };
    }, []);

    return isOnline ? (
        children
    ) : (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">You are Offline</h2>
                <p className="text-lg text-gray-600 mb-8">Please check your internet connection and try again.</p>
                <img src="/offline.svg" alt="Offline" className="w-64 mx-auto mb-8" />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => window.location.reload()}
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default OfflineWrapper;
