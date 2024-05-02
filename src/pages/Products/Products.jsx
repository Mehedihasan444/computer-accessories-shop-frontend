import { useState } from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Product_Card from "../../components/Product_Card/Product_Card";
import Product_Card_ListView from "../../components/Product_Card/Product_Card_ListView";
import { useQuery } from "@tanstack/react-query";
const Products = () => {
  // State to manage filter options
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    rating: "",
  });
  // State to manage sorting criteria
  const [sortBy, setSortBy] = useState("default");

  // State to manage view type
  const [viewType, setViewType] = useState("grid");
  // Function to handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
    // Call a function to apply filters to product list
    // For example: applyFilters(filters);
  };

  // Function to handle sorting change
  const handleSortChange = (value) => {
    setSortBy(value);
    // Call a function to apply sorting to product list
    // For example: applySorting(sortBy);
  };

  // Function to handle view change
  const handleViewChange = (value) => {
    setViewType(value);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ['data'],
    queryFn: () =>
      fetch('/products.json')
      .then((res) =>
        res.json(),
      ),
  })


console.log(data)

  return (
    <div className="flex">
      {/* Sidebar with filter options */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
        {/* Category filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Category</h3>
          {/* Sample categories, you can fetch this from your API */}
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Price range filter */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">Price Range</h3>
          <input type="range" min={0} max="100" value="40" className="range range-xs" /> 
          {/* Sample price range options, you can customize as needed */}
          <input
            type="radio"
            id="price-range1"
            name="price-range"
            value="0-50"
            checked={filters.priceRange === "0-50"}
            onChange={() => handleFilterChange("priceRange", "0-50")}
            className="mr-1"
          />
          <label htmlFor="price-range1">$0 - $50</label>
          <br />
          <input
            type="radio"
            id="price-range2"
            name="price-range"
            value="51-100"
            checked={filters.priceRange === "51-100"}
            onChange={() => handleFilterChange("priceRange", "51-100")}
            className="mr-1"
          />
          <label htmlFor="price-range2">$51 - $100</label>
          <br />
          {/* Add more price range options as needed */}
        </div>
        {/* Rating filter */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Rating</h3>
          {/* Sample rating options, you can customize as needed */}
          <input
            type="checkbox"
            id="rating1"
            value="5"
            checked={filters.rating === "5"}
            onChange={() => handleFilterChange("rating", "5")}
            className="mr-1"
          />
          <label htmlFor="rating1">5 Stars</label>
          <br />
          <input
            type="checkbox"
            id="rating2"
            value="4"
            checked={filters.rating === "4"}
            onChange={() => handleFilterChange("rating", "4")}
            className="mr-1"
          />
          <label htmlFor="rating2">4 Stars</label>
          <br />
          {/* Add more rating options as needed */}
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Brand</h3>
          {/* Sample rating options, you can customize as needed */}
          <input
            type="checkbox"
            id="brand1"
            value="5"
            checked={filters.rating === "5"}
            onChange={() => handleFilterChange("Brand", "Apple")}
            className="mr-1"
          />
          <label htmlFor="brand1">Apple</label>
          <br />
          <input
            type="checkbox"
            id="brand2"
            value="4"
            checked={filters.rating === "4"}
            onChange={() => handleFilterChange("Brand", "Samsung")}
            className="mr-1"
          />
          <label htmlFor="brand2">Samsung</label>
          <br />
          <input
            type="checkbox"
            id="brand3"
            value="4"
            checked={filters.rating === "4"}
            onChange={() => handleFilterChange("Brand", "Vivo")}
            className="mr-1"
          />
          <label htmlFor="brand3">Vivo</label>
          <br />
          <input
            type="checkbox"
            id="brand4"
            value="4"
            checked={filters.rating === "4"}
            onChange={() => handleFilterChange("Brand", "Opp0")}
            className="mr-1"
          />
          <label htmlFor="brand4">Opp0</label>
          <br />
          <input
            type="checkbox"
            id="brand5"
            value="4"
            checked={filters.rating === "4"}
            onChange={() => handleFilterChange("Brand", "Xiaomi")}
            className="mr-1"
          />
          <label htmlFor="brand5">Xiaomi</label>
          <br />
          {/* Add more rating options as needed */}
        </div>
      </div>
      {/* Product list section */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between items-center gap-10">
          <div className="flex justify-between items-center gap-5 mb-4 flex-1">
            {/* Render product list here */}
            <h2 className="text-lg font-semibold">Product Found {data?.length}</h2>
          </div>

          {/* Product cards will be rendered here */}
          <div className="flex justify-between items-center gap-5 flex-1">
            {/* Sort By dropdown */}
            <div className="flex justify-between items-center gap-5 mb-4">
              <h3 className="text-sm font-semibold mb-2">Sort By:</h3>
              <div className="">
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="default">Default</option>
                  <option value="price-low-to-high">Price: Low to High</option>
                  <option value="price-high-to-low">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  {/* Add more sorting options as needed */}
                </select>
              </div>
            </div>
            {/* View options */}
            <div className="flex justify-between items-center gap-5 mb-4">
              <h3 className="text-sm font-semibold mb-2">View:</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleViewChange("grid")}
                  className={`p-2 rounded-md ${
                    viewType === "grid"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <IoGrid/>
                </button>
                <button
                  onClick={() => handleViewChange("list")}
                  className={`p-2 rounded-md ${
                    viewType === "list"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <FaThList/>
                </button>
                {/* Add more view options as needed */}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={`mt-2 grid ${viewType==='grid'?"grid-cols-1 md:grid-cols-2 lg:grid-cols-4":"grid-cols-1"}   gap-3 mb-8`}>
          {/* <ProductCard product={product} /> */}
          {/* Display more product details */}
          {
            viewType === "grid"?<>
            {
              data?.map((product) => (
                <Product_Card product={product} key={product.id} />
              ))
            }
          
            </>:
            <>
            {
              data?.map((product) => (
                <Product_Card_ListView product={product} key={product.id} />
              ))
            }
            
            </>
           
          }
          
        </div>
      </div>
    </div>
  );
};

export default Products;
