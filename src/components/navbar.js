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
      <div className="links md:flex md:justify-between w-full bg-[#141b25] text-white p-4">
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
            
                <ul className={`md:flex  md:block ${menu ? 'hidden':''} `}>
                <li className="md:pl-5 md:pr-5 p-3">
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#6c63ff] font-bold': 'text-white') }>
                    Home
                  </NavLink>
                </li>
                <li className="md:pl-5 md:pr-5 p-3">
                  <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#6c63ff] font-bold': 'text-white') }>
                    About
                  </NavLink>
                </li>
                <li className="md:pl-5 md:pr-5 p-3">
                  <NavLink to="/service" className={({ isActive }) => (isActive ? 'text-[#6c63ff] font-bold': 'text-white') }>
                    Services
                  </NavLink>
                </li>
                <li className="md:pl-5 md:pr-5 p-3">
                  <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'text-[#6c63ff] font-bold': 'text-white') }>
                    Portfolio
                  </NavLink>
                </li>
                <li className="md:pl-5 md:pr-5 p-3">
                  <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-[#6c63ff] font-bold': 'text-white') }>
                    Blog
                  </NavLink>
                </li>
                <li className="md:pl-5 md:pr-5 p-3">
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-[#6c63ff] font-bold': 'text-white') }>
                    Contact
                  </NavLink>
                </li>
              </ul>
            
          </div>
        
      </div>
    );
}
 
export default Nav;