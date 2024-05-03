import { createContext,  useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  // const [loading,setLoading]=useState(true)
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [searchValue,setSearchValue]=useState([])
  // --------------------
  const { data: allData = [], refetch } = useQuery({
    queryKey: ["allData,"],
    queryFn: async () => {
      const res1 = await axiosPublic.get("/reviews");
      const res2 = await axiosPublic.get("/products");
      const res3 = await axiosSecure.get(`/users`);
      const res4 = await axiosSecure.get(`/admin/products/offers`);
      return [res1.data, res2.data.result, res3.data,res4.data];
    },
  });
  //--------------------

  const byId = async (id) => {
    const product = await axiosPublic.get(`/products/${id}`);

    const reviews = await axiosSecure.get(`/reviews/${id}`);

    return [product, reviews];
  };

  // ----------
  const byEmail = async (email) => {
    const user = await axiosPublic.get(`/users/${email}`);
    const reviews = await axiosSecure.get(`/reviews/${email}`);

    return [user, reviews];
  };

  //

  // ---------------
  const DataFetch = () => {
    refetch();
  };


  const all_data = {
    allData,
    DataFetch,
    byId,
    byEmail,
    setSearchValue,
    searchValue
  };

  return (
    <DataContext.Provider value={all_data}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
