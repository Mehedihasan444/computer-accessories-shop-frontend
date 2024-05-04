import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { DataContext } from "../../DataProvider/DataProvider";
import useAdmin from "../../Hooks/useAdmin";

// import './Navbar.css'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const {allData, setSearchValue } = useContext(DataContext);
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();
  const closeButtonRef = useRef(null);
const [wishlistCount,setWishlistCount] = useState(0)
const [wishlist,setWishlist]=useState([])
const [cartCount,setCartCount] = useState(0)
const [cart,setCart]=useState([])
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearchValue(searchValue)
    closeButtonRef.current.click();

    navigate("/products");
  };

  useEffect(() => {
   
      setWishlist(allData[4])
      setWishlistCount(allData[4]?.length)
      setCart(allData[5])
      setCartCount(allData[5]?.length)
    }, [allData])

// calculate all products price of wishlist
  const wishlistPrices = wishlist?.map((item) => item.price);
  const wishlistSubtotal = wishlistPrices?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  // calculate all products price of cart
  const cartPrices = cart?.map((item) => item.price);
  const cartSubtotal = cartPrices?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  


  // handle_logOut
  const handle_logOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
        toast.success("Successfully logOut!!!");
        window.location.reload(true);

      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <div>
      <hr className=" w-full" />
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">
                <li className="font-bold">
                  <a>Home</a>
                </li>
              </Link>

              <li className="font-bold">
                <a>Products</a>
              </li>
              <Link to="/repair-services">
                <li className="font-bold">
                  <a>Repair Service</a>
                </li>
              </Link>
              <li className="font-bold">
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">XYZ</a>
        </div>
        <div className="navbar-center hidden z-[50] lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/">
              <li className="font-bold">
                <a>Home</a>
              </li>
            </Link>

            <li className="font-bold">
              <a href="/products">Products</a>
            </li>
            <Link to="/repair-services">
              <li className="font-bold">
                <a>Repair Service</a>
              </li>
            </Link>
            <li className="font-bold">
              <a href="/about-us">About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex">
            <div className="dropdown dropdown-end">
              <div role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <img
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="w-5 h-5"
                    src="https://i.ibb.co/r5jdR4B/search.png"
                    alt=""
                  />
                  <dialog id="my_modal_3" className="modal">
                    <div
                      className=" bg-white flex flex-col justify-center items-center"
                      style={{ width: "100vw", height: "100vh" }}
                    >
                      <form method="dialog">
                        <button
                          ref={closeButtonRef}
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-400"
                        >
                          ✕
                        </button>
                      </form>
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-3">
                          <h3 className=" text-lg">Whats on your mind?</h3>
                          <input
                            type="text"
                            placeholder="Type here"
                            name="search"
                            className="input input-md w-[1100px] input-bordered border-black"
                          />
                          <br />
                          <button className="btn bg-black text-white px-10">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <img
                    className="w-5 h-5"
                    src="https://i.ibb.co/LY9MJK3/love.png"
                    alt=""
                  />
                  <span className="badge badge-sm indicator-item">{wishlistCount>0?wishlistCount:0}</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[50] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">{wishlistCount>0?wishlistCount:0} Items</span>
                  <span className="text-info">Subtotal: ${wishlistSubtotal>0?wishlistSubtotal:0}</span>

                  <div className="">
                    <Link
                      to="/dashboard/user/wishlist"
                      className="card-actions"
                    >
                      <button className="btn btn-primary btn-block">
                        View Wishlist
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{cartCount>0?cartCount:0}</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[50] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">{cartCount>0?cartCount:0} Items</span>
                  <span className="text-info">Subtotal: ${cartSubtotal>0?cartSubtotal:0}</span>
                  <div className="">
                    <Link to="/dashboard/user/Cart" className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end  ">
              {user ? (
                <div className="">
                  <div
                    tabIndex={0}
                    role="button "
                    className="btn btn-ghost btn-circle avatar "
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a
                        href={`/dashboard/${
                          isAdmin ? "admin_home" : "user/profile"
                        }`}
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <button onClick={handle_logOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="">
                  <Link to="/system-access/signIn">
                    <button className="btn btn-primary btn-sm mt-2 text-white text-xs bg-red-600 border-none">
                      SignIn
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full" />
    </div>
  );
};

export default Navbar;
