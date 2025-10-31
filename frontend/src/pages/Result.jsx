import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        {isSuccess ? (
          <>
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              Booking Successful 🎉
            </h1>
            <p className="text-gray-700 mb-6">
              Your booking has been confirmed. A confirmation email will be sent shortly.
            </p>
            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Back to Home
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Booking Failed 
            </h1>
            <p className="text-gray-700 mb-6">
              Something went wrong while processing your booking. Please try again later.
            </p>
            <Link
              to="/"
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Back to Home
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

