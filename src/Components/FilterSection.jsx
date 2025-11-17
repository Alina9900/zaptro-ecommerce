import React, { useState } from "react";
import { getData } from "../context/DataContext";

const FilterSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedPriceSort, setSelectedPriceSort] = useState("");
  const [selectedRatingSort, setSelectedRatingSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const { categoryOnlyData, sortByPrice, sortByRating, resetFilter, filterByCategory  ,filterBySearch,setCurrentPage } = getData();

  const handleReset = () => {
    resetFilter();
    setSelectedCategory([]);
    setSelectedRatingSort("");
    setSelectedPriceSort("")
    setSearchValue("");

  }
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-72 mt-10 border border-gray-200 space-y-6 select-none transition-all">

      {/* ----- SEARCH INPUT ----- */}
      <div>
        <h2 className="font-semibold text-xl text-gray-900 mb-3">Search</h2>
        <input
          type="text"
          placeholder="Search product..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg 
                     text-gray-800 bg-gray-50 
                     focus:ring-2 focus:ring-red-400 focus:border-red-400
                     transition-all"
          value={searchValue}
          onChange={(e) =>{
             setSearchValue(e.target.value);
            filterBySearch(e.target.value);
            setCurrentPage(1);

            
          }
          }
        />
      </div>

      {/* ----- CATEGORY FILTER ----- */}
      <div>
        <h2 className="font-semibold text-xl text-gray-900 mb-3">Category</h2>
        <div className="flex flex-col gap-3">
          {categoryOnlyData?.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all"
            >
              <input
                type="checkbox"
                checked={selectedCategory.includes(item)}
                onChange={() => {
                  if (selectedCategory.includes(item)) {
                    const updated =selectedCategory.filter((c) => c !== item)
                    setSelectedCategory(updated)
                    filterByCategory(updated)
                  }
                  else {
                    const updated = [...selectedCategory, item]
                    setSelectedCategory(updated)
                    filterByCategory(updated)
                    setCurrentPage(1);

                  }
                }}
                className="accent-red-500 scale-110" />
              <span className="text-gray-700 font-medium capitalize">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ----- SORT BY PRICE ----- */}
      <div>
        <h2 className="font-semibold text-xl text-gray-900 mb-3">Sort by Price</h2>
        <select
          value={selectedPriceSort}
          onChange={(e) => {
            setSelectedPriceSort(e.target.value)
            sortByPrice(e.target.value)
            setCurrentPage(1);

          }}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                     bg-gray-50 cursor-pointer
                     focus:ring-2 focus:ring-red-400 focus:border-red-400
                     transition-all"
        >
          <option value="">Select Option</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* ----- SORT BY RATING ----- */}
      <div>
        <h2 className="font-semibold text-xl text-gray-900 mb-3">Sort by Rating</h2>
        <select
          value={selectedRatingSort}
          onChange={(e) => {
            sortByRating(e.target.value)
            setSelectedRatingSort(e.target.value)
            setCurrentPage(1);

          }}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg
                     bg-gray-50 cursor-pointer
                     focus:ring-2 focus:ring-red-400 focus:border-red-400
                     transition-all"
        >
          <option value="">Select Option</option>
          <option value="high">Better Rating</option>
          <option value="low">Lower Rating</option>
        </select>

        <button
          onClick={handleReset}
          className="mt-6 w-full bg-gray-200 text-gray-700 py-2 rounded-lg 
             hover:bg-gray-300 transition-all font-medium"
        >
          Reset Filters
        </button>
      </div>

    </div>
  );
};

export default FilterSection;
