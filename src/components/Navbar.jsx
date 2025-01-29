import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

// import font awesome icons
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 55) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];
  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className={`navbar container ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logo">
          T<span>aste</span>Quest
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={
            showSidebar ? "sidebar-btn active" : "sidebar-btn inactive"
          }
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
