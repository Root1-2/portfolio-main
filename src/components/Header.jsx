import { useState } from "react";
import { FaBars, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import icon from "/bannerImg.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  function handleActiveClass(e) {
    // Remove 'text-green-800' from all links
    document.querySelectorAll(".nav-item").forEach((link) => {
      link.classList.remove("text-blue-800", "text-white");
    });

    // Add 'text-green-800' to the clicked link
    e.currentTarget.classList.add("text-blue-800");
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-transparent">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <NavLink
          to="/#landing"
          className="animate__animated animate__swing flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={icon} className="h-8 pt-2" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Portfolio
          </span>
        </NavLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="h-5 w-5" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 bg-slate-950 p-4 font-medium text-white sm:bg-transparent md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <NavLink
                to="/#landing"
                onClick={(e) => {
                  handleActiveClass(e);
                  closeMenu();
                }}
                className="nav-item block rounded px-3 py-2 md:bg-transparent md:p-0 md:hover:text-blue-500"
              >
                Landing
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/#skills"
                onClick={(e) => {
                  handleActiveClass(e);
                  closeMenu();
                }}
                className="nav-item block rounded px-3 py-2 md:bg-transparent md:p-0 md:hover:text-blue-500"
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/#projects"
                onClick={(e) => {
                  handleActiveClass(e);
                  closeMenu();
                }}
                className="nav-item block rounded px-3 py-2 md:bg-transparent md:p-0 md:hover:text-blue-500"
              >
                Projects
              </NavLink>
            </li>

            <li className="relative" onMouseEnter={openDropdown}>
              <NavLink
                to="/#contacts"
                onClick={(e) => {
                  handleActiveClass(e);
                  closeDropdown();
                  closeMenu();
                }}
                className="nav-item block rounded px-3 py-2 md:bg-transparent md:p-0 md:hover:text-blue-500"
              >
                Contacts
              </NavLink>
              {isDropdownOpen && (
                <ul
                  onMouseLeave={closeDropdown}
                  className="absolute right-0 mt-3 flex space-x-5 rounded-lg bg-gray-800 p-4 shadow-lg"
                >
                  <li>
                    <a
                      href="https://github.com/Root1-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-200"
                    >
                      <FaGithub size={30} />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdullah-al-masrur-839000222/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-200"
                    >
                      <FaLinkedinIn size={30} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Abdullah_Al_Masrur_Resume_React.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-200"
                    >
                      <IoDocumentsOutline size={30} />
                      <span>CV</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
