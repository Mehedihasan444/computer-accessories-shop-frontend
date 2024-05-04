import { createContext,  useContext,  useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthProvider/AuthProvider";


export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  // const [loading,setLoading]=useState(true)
  const { user } = useContext(AuthContext);
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
      const res4 = await axiosSecure.get(`/offers`);
      const res5 = await axiosSecure.get(`/wishlist/${user?.email}`);
      const res6 = await axiosSecure.get(`/cart/${user?.email}`);
      const res7 = await axiosSecure.get(`/appointments`);
      const res8 = await axiosSecure.get(`/appointments/${user?.email}`);
      const res9 = await axiosSecure.get(`/orders`);
      const res10 = await axiosSecure.get(`/orders/${user?.email}`);
     
      return [res1.data, res2.data.result, res3.data,res4.data,res5.data,res6.data,res7.data,res8.data,res9.data,res10.data];
    },
  });
  //--------------------

  const byId = async (id) => {
    const product = await axiosPublic.get(`/products/${id}`);

    const reviews = await axiosSecure.get(`/single/reviews/${id}`);

    return [product.data, reviews.data];
  };

  // ----------
  const byEmail = async (email) => {
    const user = await axiosPublic.get(`/users/${email}`);
    const reviews = await axiosSecure.get(`/reviews/${email}`);
    // const wishlist = await axiosSecure.get(`/wishlist/${email}`);

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
