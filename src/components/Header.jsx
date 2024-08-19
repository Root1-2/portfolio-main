import { useState } from "react";
import { FaBars, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import icon from "/icon.png";

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

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-gray-200 bg-transparent">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          href="/#landing"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={icon} className="h-8 pt-2" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Portfolio
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-transparent">
            <li>
              <a
                href="/#landing"
                onClick={closeMenu}
                className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Landing
              </a>
            </li>
            <li>
              <a
                href="/#skills"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="relative" onMouseEnter={openDropdown}>
              <a
                href="/#contacts"
                onClick={() => {
                  closeDropdown();
                  closeMenu();
                }}
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contacts
              </a>
              {isDropdownOpen && (
                <ul
                  onMouseLeave={closeDropdown}
                  className="absolute right-0 mt-3 flex space-x-5 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
                >
                  <li>
                    <a
                      href="https://github.com/Root1-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
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
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                    >
                      <FaLinkedinIn size={30} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
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
