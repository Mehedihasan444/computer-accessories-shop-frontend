import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

// import './Navbar.css'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const admin = false;

  const handle_logOut = () => {

    logOut()
      .then((res) => {
        console.log(res)
        toast.success('Successfully logOut!!!');
      })
      .catch((err) => {
        console.log(err)
        toast.error('Something went wrong');
      })
  }


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
              <li>
                <a className="font-bold">Categories</a>
                <ul className="p-2">
                <li>
                    <a href="#">Laptop</a>
                  </li>
                  <li>
                    <a href="#">Phones</a>
                  </li>
                </ul>
              </li>
              <li className="font-bold">
                <a>Products</a>
              </li>
              <Link to='/blogs'>
                <li className="font-bold">
                  <a>Blogs</a>
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
            <li>
              <details>
                <summary className="font-bold">Categories</summary>
                <ul className="p-2">
                  <li>
                    <a href="#">Laptop</a>
                  </li>
                  <li>
                    <a href="#">Phones</a>
                  </li>
                </ul>
              </details>
            </li>

            <li className="font-bold">
              <a href="/products">Products</a>
            </li>
            <Link to='/blogs'>
              <li className="font-bold">
                <a>Blogs</a>
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
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-slate-400">
                          ✕
                        </button>
                      </form>
                      <div className="space-y-3">
                        <h3 className=" text-lg">Whats on your mind?</h3>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-md w-[1100px] input-bordered border-black"
                        />
                        <br />
                        <button className="btn bg-black text-white px-10">
                          Search
                        </button>
                      </div>
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
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[50] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">0 Items</span>
                  <span className="text-info">Subtotal: $0</span>
                 
                  <div className="">
                    <Link to="/dashboard/user/wishlist" className="card-actions">

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
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[50] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
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
                    <a href={`/dashboard/${admin?"admin_home":"user/profile"}`}>Dashboard</a>
                    </li>
                    <li>
                      <button onClick={handle_logOut}>Logout</button>
                    </li>
                  </ul>
                </div>


              ) : (
                <div className="">
                  <Link to="/system-access/signIn">
                    <button className="btn btn-primary btn-sm mt-2 text-white text-xs bg-red-600 border-none">SignIn</button>
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