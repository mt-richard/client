import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [openNav, setopenNav] = useState(false);
    const [menu, closeMenu] = useState(true);
    const [desktop, setDesktop] = useState(true);


    function myMenu(e) {
        e.preventDefault();
        setopenNav(true)
        closeMenu(false);
    }
    function myMenuclose(e) {
      e.preventDefault();
        setopenNav(false);
        closeMenu(true);
        
    }

    return (
      <div className="links md:flex md:justify-between w-full z-10 sticky top-0 bg-[#141b25] text-white p-4">
        <div className="logos p-3 text-3xl font-bold">ProTech.</div>

        <div className="links ">
          {menu ? (
            <button
              onClick={myMenu}
              className="absolute md:hidden top-10 right-3 cursor:pointer text-gray-300"
            >
              MENU
            </button>
          ) : (
            <button
              onClick={myMenuclose}
              className="absolute top-10 md:hidden right-3 cursor:pointer text-gray-300"
            >
              MENU
            </button>
          )}

          <ul
            className={`md:flex  md:block ${
              menu ? "hidden" : "scroll-smooth"
            } `}
          >
            <NavLink
              to="/"
              onClick={({ isActive }) => myMenuclose()}
              className={({ isActive }) =>
                isActive ? "text-[#6c63ff] font-bold" : "text-white"
              }
            >
              <li className="md:pl-5 md:pr-5 p-3">Home</li>
            </NavLink>

            <NavLink
              to="/about"
              onClick={({ isActive }) => myMenuclose()}
              className={({ isActive }) =>
                isActive ? "text-[#6c63ff] font-bold" : "text-white"
              }
            >
              <li className="md:pl-5 md:pr-5 p-3">About</li>
            </NavLink>

            <NavLink
              to="/service"
              onClick={({ isActive }) => myMenuclose()}
              className={({ isActive }) =>
                isActive ? "text-[#6c63ff] font-bold" : "text-white"
              }
            >
              <li className="md:pl-5 md:pr-5 p-3">Services </li>
            </NavLink>

            <NavLink
              to="/portfolio"
              onClick={({ isActive }) => myMenuclose()}
              className={({ isActive }) =>
                isActive ? "text-[#6c63ff] font-bold" : "text-white"
              }
            >
              <li className="md:pl-5 md:pr-5 p-3">Portfolio</li>
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#6c63ff] font-bold" : "text-white"
              }
            >
              <li className="md:pl-5 md:pr-5 p-3">Blog</li>
            </NavLink>

            <NavLink
              to="/contact"
              onClick={({ isActive }) => myMenuclose()}
              className={({ isActive }) =>
                isActive ? "text-[#6c63ff] font-bold" : "text-white"
              }
            >
              <li className="md:pl-5 md:pr-5 p-3">Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
}
 
export default Nav;