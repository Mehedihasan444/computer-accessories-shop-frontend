import { NavLink } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard_Sidebar = () => {
  const [isAdmin,isAdminLoading]=useAdmin()
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-3  ">
            <h1 className=" text-2xl font-bold text-center my-5">Dashboard</h1>
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                {/* Admin Routes */}
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin_home">Admin Home</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/set_offers">Set Offers</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/all_users">All Users</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/add_a_product">
                    Add a Product
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/all_products">
                    All Products
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/reviews">Reviews</NavLink>
                </li>
              </>
            ) : (
              <>
                {/* User Routes */}
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/profile">Profile</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/orders">Orders</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/cart">Cart</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/wishlist">Wishlist</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/my_reviews">My Reviews</NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/purchase_history">
                    Purchase History
                  </NavLink>
                </li>
              </>
            )}
          <div className="divider">
            
          </div>
            <li className="text-lg font-semibold">
              <NavLink to="/">Back To Home</NavLink>
            </li>
          </ul>
          
        </div>

        {/* <div className="drawer-content flex flex-col items-center justify-center ">
        
          <label
            htmlFor="my-drawer-2"
            className="text-2xl p-3   rounded-md drawer-button lg:hidden"
          >
            <FaBars />
          </label>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard_Sidebar;
