import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="main_menu home_menu">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand" href="index.html">
                {" "}
                <img
                  src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
                  alt="logo"
                />{" "}
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="menu_icon">
                  <i class="fas fa-bars"></i>
                </span>
              </button>
              <div
                class="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown_1"
                    >
                      <a class="dropdown-item" href="category.html">
                        {" "}
                        shop category
                      </a>
                      <a class="dropdown-item" href="single-product.html">
                        product details
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      pages
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a class="dropdown-item" href="login.html">
                        {" "}
                        login
                      </a>
                      <a class="dropdown-item" href="tracking.html">
                        tracking
                      </a>
                      <a class="dropdown-item" href="checkout.html">
                        product checkout
                      </a>
                      <a class="dropdown-item" href="cart.html">
                        shopping cart
                      </a>
                      <a class="dropdown-item" href="confirmation.html">
                        confirmation
                      </a>
                      <a class="dropdown-item" href="elements.html">
                        elements
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      blog
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a class="dropdown-item" href="blog.html">
                        {" "}
                        blog
                      </a>
                      <a class="dropdown-item" href="single-blog.html">
                        Single blog
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="hearer_icon d-flex">
                <a id="search_1" href="javascript:void(0)">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="">
                  <i class="fa-regular fa-heart"></i>
                </a>
                <div class="dropdown cart">
                  <Link
                    class="dropdown-toggle"
                    to="basket"
                    id="navbarDropdown3"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class=" fas fa-cart-plus"></i>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="search_input"
        id="search_input_box"
        style={{ display: "none" }}
      >
        <div class="container ">
          <form class="d-flex justify-content-between search-inner">
            <input
              type="text"
              class="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" class="btn"></button>
            <span
              class="ti-close"
              id="close_search"
              title="Close Search"
            ></span>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
