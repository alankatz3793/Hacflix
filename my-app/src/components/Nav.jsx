import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div
      className={`Nav d-flex justify-content-between text-white py-3 ${
        show && "nav_black"
      }`}
      style={{
        position: "fixed",
        top: "0px",
        zIndex: 100,
        height: "60px",
        width: "100%",
        padding: "30px",
      }}
    >
      <div>
        <Link to={"/"}>
          <h4 style={{ color: "#e50914", fontWeight: "900" }}>Hackflix</h4>
        </Link>
      </div>
      <div
        className="d-flex align-items-start"
        style={{ paddingTop: "1.35px" }}
      >
        <Link to={"/"}>
          <h6 className=" mx-3 mt-1">Home</h6>
        </Link>
        <Link to={"/aboutUs"}>
          <h6 className=" mx-3 mt-1">About us</h6>
        </Link>
        <Link to={"/contact"}>
          <h6 className="mx-3 mt-1">Contact</h6>
        </Link>
        <NavDropdown
          title="Search by"
          id="basic-nav-dropdown"
          className="mx-3"
          style={{ paddingTop: "1.3px", fontWeight: "500" }}
        >
          <NavDropdown.Item href="/rating">
            <span style={{ color: "black" }}>Rating</span>
          </NavDropdown.Item>
          <NavDropdown.Item href="/search">Title</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
}

export default Nav;
