import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold mb-4" aria-label="404 Error">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-6" role="alert">
          Oops! The page <code className="bg-gray-200 px-1 rounded">{location.pathname}</code> was not found.
        </p>
        <Link
          to="/"
          className="inline-block text-blue-500 hover:text-blue-700 underline font-semibold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
