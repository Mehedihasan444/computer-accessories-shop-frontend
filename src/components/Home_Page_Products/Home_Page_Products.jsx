import { NavLink, Outlet } from "react-router-dom";

const Home_Page_Products = () => {
  return (
    <div className="my-20 flex flex-col items-center space-y-4 sm:mx-20">
      <div className="menu menu-horizontal flex gap-10 justify-center">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active text-red-500 font-semibold text-xl uppercase"
              : "text-gray-500 font-semibold text-xl uppercase"
          }
        >
          New Arrivals
        </NavLink>

        <NavLink
          to="/Featured"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active text-red-500  font-semibold text-xl uppercase"
              : "text-gray-500 font-semibold text-xl uppercase"
          }
        >
          Featured
        </NavLink>

        <NavLink
          to="/Top-Selling"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active text-red-500 font-semibold text-xl uppercase"
              : "text-gray-500 font-semibold text-xl uppercase"
          }
        >
          Top Selling
        </NavLink>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Home_Page_Products;
