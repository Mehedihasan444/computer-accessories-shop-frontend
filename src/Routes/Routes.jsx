import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import ProductDetails from "../pages/product detail/ProductDetails";
import AddProduct from "../dashboard/admin/AddProduct";
import Home from "../pages/Home/Home";
import App from "../App";
import Register from "../pages/Register/Register";
import System_Access from "../pages/System_Access/System_Access";
import Products from "../pages/Products/Products";
import Home_Page_Products from "../components/Home_Page_Products/Home_Page_Products";
import New_Arrivals from "../pages/New_Arrivals/New_Arrivals";
import Featured from "../pages/Featured/Featured";
import Top_Selling from "../pages/Top_Selling/Top_Selling";
import About_Us from "../pages/About_Us/About_Us";
import Dashboard from "../dashboard/Dashboard";
import All_Users from "../dashboard/admin/All_Users";
import Admin_Home from "../dashboard/admin/Admin_Home";
import Reviews from "../dashboard/admin/Reviews";
import Profile from "../dashboard/user/Profile";
import Cart from "../dashboard/user/Cart";
import Order from "../dashboard/user/Order";
import My_Reviews from "../dashboard/user/My_Reviews";
import Purchase_History from "../dashboard/user/Purchase_History";
import Wishlist from "../dashboard/user/Wishlist";
import All_Products from "../dashboard/admin/All_Products";
import Update_Product from "../dashboard/admin/Update_Product";
import Offers from "../dashboard/admin/Offers";
import RepairService from "../pages/Repair_Service/RepairService";
import RepairServiceDetail from "../pages/Repair_Service/RepairServiceDetail";
import Appointments from "../dashboard/admin/Appointments";
import My_Appointments from "../dashboard/user/My_Appointments";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../pages/PaymentFailed/PaymentFailed ";
import ForgotPassword from "../pages/SignIn/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
         
          {
            path: "/",
            element: <New_Arrivals />,
          },
          {
            path: "/Featured",
            element: <Featured />,
          },
          {
            path: "/Top-Selling",
            element: <Top_Selling />,
          },
        ],
      },
     
      {
        path: "/product-detail/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <About_Us />,
      },
      {
        path: "/repair-services",
        element: <RepairService />,
      },
      {
        path: "/repair-services-details/:category",
        element: <RepairServiceDetail />,
      },
    
      
    ],
  },
  {
    path: "/system-access",
    element: <System_Access />,
    children: [
      {
        path: "/system-access/signIn",
        element: <SignIn />,
      },
      {
        path: "/system-access/ForgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/system-access/signUp",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <Dashboard /></PrivateRoute> ,
    children: [
      {
        path: "/dashboard/admin_home",
        element: <PrivateRoute> <AdminRoute><Admin_Home /></AdminRoute></PrivateRoute>,
      },
      {
        path: "/dashboard/admin/add_a_product",
          element:<PrivateRoute><AdminRoute><AddProduct /></AdminRoute></PrivateRoute> ,
        
      },
      {
        path: "/dashboard/admin/all_products",
          element: <PrivateRoute><AdminRoute><All_Products /></AdminRoute></PrivateRoute>,
        
      },
      {
        path: "/dashboard/admin/update_products/:id",
          element: <PrivateRoute><AdminRoute><Update_Product /></AdminRoute></PrivateRoute>,
        
      },
      {
        path: "/dashboard/admin/all_users",
          element: <PrivateRoute><AdminRoute><All_Users /></AdminRoute></PrivateRoute>,
        
      },
      {
        path: "/dashboard/admin/set_offers",
          element:<PrivateRoute><AdminRoute><Offers /></AdminRoute></PrivateRoute> ,
        
      },
      {
        path: "/dashboard/admin/appointments",
          element:<PrivateRoute><AdminRoute><Appointments /></AdminRoute></PrivateRoute> ,
        
      },
      {
        path: "/dashboard/admin/reviews",
          element: <PrivateRoute><AdminRoute><Reviews /></AdminRoute></PrivateRoute> ,
        
      },
      // user routes

      {
        path: "/dashboard/user/profile",
          element:<PrivateRoute> <Profile /></PrivateRoute>,
      },
      {
        path: "/dashboard/user/Cart",
          element: <PrivateRoute><Cart /></PrivateRoute>,
      },
      {
        path: "/dashboard/user/wishlist",
          element:<PrivateRoute> <Wishlist /></PrivateRoute>,
      },
    
      {
        path: "/dashboard/user/orders",
          element:<PrivateRoute> <Order /></PrivateRoute>,
      },
      {
        path: "/dashboard/user/my_reviews",
          element:<PrivateRoute> <My_Reviews /></PrivateRoute>,
      },
      {
        path: "/dashboard/user/purchase_history",
          element: <PrivateRoute><Purchase_History /></PrivateRoute>,
      },
      {
        path: "/dashboard/user/my_appointments",
          element:<PrivateRoute> <My_Appointments /></PrivateRoute>,
      },
    
    ],
  },
  {
    path: "/api/v1/payment-complete/:transactionId",
    element:<PrivateRoute><PaymentSuccess/></PrivateRoute>
  },
  {
    path: "/api/v1/payment-failed/:transactionId",
    element:<PrivateRoute><PaymentFailed /></PrivateRoute>
  },
  
]);

export default Routes;
