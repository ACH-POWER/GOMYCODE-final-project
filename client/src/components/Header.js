import React, { useState, useContext } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import styled from "styled-components";
import LanguageContext from "../context/LanguageContext";
import { useIntl } from "react-intl";

const Logos = styled.img`
  width: 150px;
  height: 50px;
`;

const SearchBtn = styled.button`
  color: white;
  border-color: #d7a86e;
  background-color: #d7a86e;
  font-size: 16px;
`;

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  const { formatMessage } = useIntl();
  const { setLang } = useContext(LanguageContext);
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+255 768 356 890</p>
              <p>info@zpunet.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <Logos alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          {formatMessage({ id: "Profile" })}
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          {formatMessage({ id: "Logout" })}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          {formatMessage({ id: "Login" })}
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          {formatMessage({ id: "Register" })}
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      {formatMessage({ id: "search" })}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-3 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <div className="col-md-6 col-7 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <SearchBtn type="submit" className="search-button">
                    {formatMessage({ id: "search" })}
                  </SearchBtn>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {formatMessage({ id: "hi" })}, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        {formatMessage({ id: "Profile" })}
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        {formatMessage({ id: "Logout" })}
                      </Link>
                      <NavDropdown
                        className="Dropdown"
                        id="nav-dropdown-dark-example"
                        title="LANGAGE"
                        menuVariant="dark"
                      >
                        <NavDropdown.Item onClick={() => setLang("fr")}>
                          {formatMessage({ id: "FRANCE" })}
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setLang("en")}>
                          {formatMessage({ id: "ENGLISH" })}
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </div>
                ) : (
                  <>
                    <NavDropdown
                      className="Dropdown"
                      id="nav-dropdown-dark-example"
                      title="LANGAGE"
                      menuVariant="dark"
                      style={{ marginRight: "0px" }}
                    >
                      <NavDropdown.Item
                        className="dropdownItem"
                        onClick={() => setLang("fr")}
                      >
                        {formatMessage({ id: "FRANCE" })}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="dropdownItem"
                        onClick={() => setLang("en")}
                      >
                        {formatMessage({ id: "ENGLISH" })}
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Link
                      style={{ marginRight: "15px" }}
                      to="/register"
                      className="header_link"
                    >
                      {formatMessage({ id: "Register" })}
                    </Link>
                    <Link
                      style={{ marginRight: "15px" }}
                      to="/login"
                      className="header_link"
                    >
                      {formatMessage({ id: "Login" })}
                    </Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag cartIcon"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
