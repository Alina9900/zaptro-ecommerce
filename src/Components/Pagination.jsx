import React from "react";
import { getData } from "../context/DataContext";

const Pagination = () => {
  const { data, currentPage, setCurrentPage, itemsPerPage } = getData();

  if (!data) return null;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (totalPages > currentPage) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center gap-3 justify-center mt-10">

      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === index + 1
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
