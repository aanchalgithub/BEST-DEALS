import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <!-- footer --> */}
      <div class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-6">
              <div class="footer-box about-widget">
                <h2 class="widget-title">About us</h2>
                <p>
                  Finding the best deals can feel like uncovering hidden
                  treasures in a sea of options. Whether you're hunting for the
                  latest tech gadgets, fashionable clothing, or even everyday
                  groceries, a little research can go a long way.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-box get-in-touch">
                <h2 class="widget-title">Get in Touch</h2>
                <ul>
                  <li>H-221 ibyte infomatics pvt ltd</li>
                  <li>
                    <a href="mailto : vermaaanchal546@gmail.com ">
                      vermaaanchal546@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel : 9760382953"></a>+91 9760382953
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="footer-box pages">
                <h2 class="widget-title">Menu</h2>
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="footer-box subscribe">
                <h2 class="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form action="index.html">
                  <input type="email" placeholder="Email" />
                  <button type="submit">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer --> */}
    </>
  );
}
