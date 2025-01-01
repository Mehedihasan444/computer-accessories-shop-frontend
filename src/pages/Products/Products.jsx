import { useContext, useEffect, useState } from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Product_Card from "../../components/Product_Card/Product_Card";
import Product_Card_ListView from "../../components/Product_Card/Product_Card_ListView";
import { DataContext } from "../../DataProvider/DataProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ProductsPageSideBer from "../../components/productsPageSideBer/ProductsPageSideBer";
import { Link, useLocation } from "react-router-dom";
const Products = () => {
  const axiosPublic = useAxiosPublic();
  const [viewType, setViewType] = useState("grid");
  const { searchValue } = useContext(DataContext);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [products, setProducts] = useState([]);
  // const location=useLocation()

  const { data, isPending, refetch } = useQuery({
    queryKey: [
      "data",
      searchValue,
      sortBy,
      currentPage,
      category,
      brand,
      itemsPerPage,
      numberOfPages,
    ],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?productName=${searchValue}&category=${category}&brand=${brand}&sortField=price&sortOrder=${sortBy}&page=${currentPage}&limit=${itemsPerPage}`
      );

      return res.data;
    },
  });
  // Function to handle view change
  const handleViewChange = (value) => {
    setViewType(value);
  };
  useEffect(() => {
    if (data) {
      setProducts(data);
      const count = data.count;
      // console.log(count);
      const NumOfPages = Math.ceil(count / itemsPerPage);
      setNumberOfPages(NumOfPages);
    }
  }, [itemsPerPage, data]);

  const pages = [...Array(numberOfPages).keys()];
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(1);
  };

  // console.log(data)
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex mt-4">
      {/* Sidebar with filter options */}
      <div className="w-1/4 p-4 shadow  hidden md:flex-col md:flex ">
        <ProductsPageSideBer
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          
        />
      </div>
      {/* Product list section */}
      <div className="md:w-3/4 p-4 mx-5 md:mx-0">
        <div className="flex justify-between items-center md:gap-10">
          <div className="flex justify-between items-center gap-5 mb-4 flex-1">
            {/* Render product list here */}
            <h2 className="text-lg font-semibold">
              Product Found {products.result?.length}
            </h2>
          </div>

          {/* Product cards will be rendered here */}
          <div className="flex justify-between items-center gap-5 flex-1">
            {/* Sort By dropdown */}
            <div className="flex justify-between items-center gap-5 mb-4">
              <h3 className="text-sm font-semibold mb-2">Sort By:</h3>
              <div className="">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="" disabled selected>
                    Price
                  </option>
                  <option value="desc">High To Low</option>
                  <option value="asc">Low To High</option>
                  <option value="rating">Rating</option>
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
                  <IoGrid />
                </button>
                <button
                  onClick={() => handleViewChange("list")}
                  className={`p-2 rounded-md ${
                    viewType === "list"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  <FaThList />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          className={`mt-2 grid ${
            viewType === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1"
          }   gap-3 mb-8`}
        >
          {
            isPending ? (
            <div className="flex justify-center items-center w-[85vw]">
              <h1 className="text-2xl font-semibold "> Loading...</h1>
            </div>
          ) :
           viewType === "grid" ? ( 
            <>
            {
              products?.result?.length==0?<h1 className="">Product not found</h1> :
              <>
              {products?.result?.map((product) => (
                <Product_Card product={product} key={product._id} />
              ))}
              </>
            }
              
            </>
          ) : (
            <>
                {
              products?.result?.length==0?<h1 className="">Product not found</h1> :
              <>
               {products?.result?.map((product) => (
                <Product_Card_ListView product={product} key={product._id} />
              ))}
              </>
            }
             
            </>
          )}
        </div>
        {/* pagination */}
        <div className="flex justify-center sm:justify-end items-center pr-5">
          <div className="py-10 text-center">
            <button
              className="btn btn-accent mr-3 text-white"
              onClick={handlePreviousPage}
              disabled={currentPage === 1 ? true : false}
            >
              «
            </button>
            {pages?.map((page) => (
              <button
                className={`${
                  currentPage === page + 1 ? "btn-disabled" : "text-white"
                } mr-2 btn btn-accent`}
                key={page}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            ))}
            <button
              className="btn btn-accent text-white"
              onClick={handleNextPage}
              disabled={currentPage === pages.length ? true : false}
            >
              »
            </button>
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPage}
              className="rounded-md ml-2 select  input-bordered"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
