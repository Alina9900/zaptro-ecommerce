import React, { useEffect, useState } from 'react'
import { getData } from "../context/DataContext"
import FilterSection from '../Components/FilterSection';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import Pagination from '../Components/Pagination';

const Products = () => {
  const { data, fetchAllProduct, currentItems } = getData();
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    fetchAllProduct()
  }, []);

  return (
    <div className="px-4 mt-4">
      {data?.length > 0 ? (
        <div className="mb-5">

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-end mb-4">
            <button
              onClick={() => setShowFilter(true)}
              className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-md text-sm font-semibold"
            >
              Filters ▾
            </button>
          </div>

          {/* MAIN WRAPPER */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* FILTER SIDEBAR (Desktop) */}
            <div className="hidden lg:block w-[18%]">
              <FilterSection />
            </div>

            {/* PRODUCT GRID */}
            <div className="w-full lg:w-[80%]">
              <div
                className="
                  grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  md:grid-cols-3
                  lg:grid-cols-4
                  gap-6
                "
              >
                {currentItems?.map((item, index) => (
                  <ProductCard item={item} index={index} key={index} />
                ))}
              </div>

              {/* PAGINATION */}
              <div className="mt-8">
                <Pagination />
              </div>

            </div>

          </div>

        </div>
      ) : (
        <Loader />
      )}

      {/* Mobile Filter Drawer */}
      {showFilter && (
        <>
          {/* Background Overlay */}
          <div
            onClick={() => setShowFilter(false)}
            className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          ></div>

          {/* Sliding Drawer */}
          <div
            className="
              fixed top-0 right-0 h-full w-3/4 max-w-xs 
              bg-white z-50 lg:hidden 
              shadow-xl overflow-y-auto
              transform animate-[slideIn_0.3s_ease-out]
              p-4
            "
          >
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowFilter(false)}
                className="text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            <FilterSection />
          </div>
        </>
      )}

    </div>
  );
};

export default Products;
