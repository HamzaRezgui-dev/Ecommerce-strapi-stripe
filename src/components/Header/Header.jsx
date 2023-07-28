import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Header.scss";
import Cart from "../Cart/Cart";
const Header = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/tn.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>TND</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            HMOZSTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/2">
              HomePage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/About">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Stores">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setopen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Header;
