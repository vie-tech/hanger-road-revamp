import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import siteLogo from "../../images/hangarroad.png"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Header = () => {
  const [navList, setNavList] = useState(false)
     const [phoneView, setPhoneView] = useState(false);
     function toggleMenu() {
       const navigation = document.querySelector(".navigation");
       const toggle = document.querySelector(".togglemenu");
       navigation.classList.toggle("active");
       toggle.classList.toggle("active");

       if (navigation.classList.contains(".active")) {
         setPhoneView(false);
       } else {
         setPhoneView(true);
       }
     }


  return (
    <>
      <header>
        <div className="container flex">
          <Link to="/">
            <div className="logo">
              <img src={siteLogo} alt="" />
            </div>
          </Link>

          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              <li className="dropdown">
                <a
                  href="#services"
                  style={{ textDecoration: "none", color: "#2d3954" }}
                >
                  Services
                </a>
                {navList ? (
                  ""
                ) : (
                  <div className="dropdown-content">
                    <Link
                      to="/crude oil tank services"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      Crude Oil Tank Services{" "}
                    </Link>
                    <Link
                      to="/inspection and test services"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      Inspection and Test Services
                    </Link>
                    <Link
                      to="/waste management services"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      Waste Management
                    </Link>
                    <Link
                      to="/marine services"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      Marine Services
                    </Link>

                    <Link
                      to="/civil construction services"
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      Civil Construction
                    </Link>
                  </div>
                )}
              </li>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link
                    to={list.path}
                    style={{ textDecoration: "none", color: "#2d3954" }}
                  >
                    {list.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
