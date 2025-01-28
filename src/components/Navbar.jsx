import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

// import font awesome icons
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="#!" className="logo">
          T<span>aste</span>Quest
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href={link.path} key={link.name}>
              {link.name}
            </a>
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
