import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({search, setSearch, isLogin}) => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          {" "}
          React Ecommerce
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center flex justify-content-center align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="max-w-md mx-auto">
                <div className="mx-2 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                  <input
                    className="peer h-full w-full focus:outline-0 border-1 text-sm text-gray-700 pr-2 rounded-5 px-3"
                    type="text"
                    id="search"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                    placeholder="Search products.."
                  />
                </div>
              </div>
            </li>
          </ul>
          <div className="buttons text-center">
          {
            isLogin ? <NavLink to="/home" className="btn btn-outline-dark m-2" >
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink> 
            : 
            <NavLink to="/" className="btn btn-outline-dark m-2" onClick={()=>{
              localStorage.clear("token")
            }}>
              <i className="fa fa-sign-in-alt mr-1"></i> Logout
            </NavLink>
          }
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}){" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
