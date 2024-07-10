import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoLTeoO3dvjcxZP2VgVDj1VHycbpFAQ2ZIKy0Et9Aksi63KYn4cIBHxnKAi23Jhp0zLM&usqp=CAU" alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">SHOP</Link>
        <Link to="/contact">CONTACT US</Link>
        <Link to="/body-shape">BODY SHAPE</Link>
        <Link to="/match-maker">MATCH MAKER</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
