import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <!--PreLoader--> */}
      <div className="loader">
        <div className="loader-inner">
          <div className="circle"></div>
        </div>
      </div>
      {/* <!--PreLoader Ends--> */}

      {/* <!-- header --> */}
      <div className="top-header-area sticky-top" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* <!-- logo --> */}
                <div className="site-logo">
                  <Link to="/">
                    <p className="logo-title">Best<span className="logo-title-span"> Deals</span></p>
                  </Link>
                </div>
                {/* <!-- logo --> */}

                {/* <!-- menu start --> */}
                <nav className="main-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                   
               
                    <li>
                      <div className="header-icons">
                      <li>
                      <a href="shop.html">Aanchal Verma</a>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                          <Link href="/cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Check Out</Link>
                        </li>
                        <li>
                          <Link to="single-product">Logout</Link>
                        </li>
                       
                      </ul>
                    </li>
                        <Link className="shopping-cart" to="/cart">
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <a className="mobile-hide search-bar-icon" href="#">
                          <i className="fas fa-search"></i>
                        </a>
                      </div>
                    </li>
                    
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search"></i>
                </a>
                <div className="mobile-menu"></div>
                {/* <!-- menu end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end header --> */}
      {/* <!-- search area --> */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn">
                <i className="fas fa-window-close"></i>
              </span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">
                    Search <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end search area --> */}
    </>
  );
}
