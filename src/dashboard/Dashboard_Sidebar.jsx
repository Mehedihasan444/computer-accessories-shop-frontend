import { NavLink } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { 
  MdDashboard, 
  MdLocalOffer, 
  MdPeople, 
  MdAddBox,
  MdReviews,
  MdDateRange
} from "react-icons/md";
import {
  FaUser,
  FaShoppingCart,
  FaClipboardList,
  FaHeart,
  FaComments,
  FaCalendarAlt,
  FaHistory,
  FaHome
} from "react-icons/fa";
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
                  <NavLink to="/dashboard/admin_home">
                    <MdDashboard /> Admin Home
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/set_offers">
                    <MdLocalOffer /> Set Offers
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/all_users">
                    <MdPeople /> All Users
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/add_a_product">
                    <MdAddBox /> Add a Product
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/reviews">
                    <MdReviews /> Reviews
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/admin/appointments">
                    <MdDateRange /> Appointments
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                 {/* User Routes */}
                 <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/profile">
                    <FaUser /> Profile
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/orders">
                    <FaClipboardList /> Orders
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/cart">
                    <FaShoppingCart /> Cart
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/wishlist">
                    <FaHeart /> Wishlist
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/my_reviews">
                    <FaComments /> My Reviews
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/my_appointments">
                    <FaCalendarAlt /> My Appointments
                  </NavLink>
                </li>
                <li className="text-lg font-semibold">
                  <NavLink to="/dashboard/user/purchase_history">
                    <FaHistory /> Purchase History
                  </NavLink>
                </li>
              </>
            )}
          <div className="divider">
            
          </div>
            <li className="text-lg font-semibold">
            
              <NavLink to="/">
              <FaHome/>
              Back To Home</NavLink>
            </li>
          </ul>
          
        </div>

    
      </div>
    </>
  );
};

export default Dashboard_Sidebar;
