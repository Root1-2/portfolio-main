import icon from "/bannerImg.svg";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer class="rounded-lg bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#landing"
            class="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icon} class="h-8 pt-2" alt="Logo" />
            <span class="self-center whitespace-nowrap text-2xl font-semibold text-white">
              Portfolio
            </span>
          </a>
          <ul class="mb-6 flex flex-wrap items-center gap-5 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a
                href="https://github.com/Root1-2"
                target="_blank"
                rel="noopener noreferrer"
                class="me-4 md:me-6"
              >
                <FaGithub title="GitHub Profile" size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdullah-al-masrur-839000222/"
                class="me-4 hover:underline md:me-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn title="LinkedIn Profile" size={30} />
              </a>
            </li>
            <li>
              <a
                href="/Abdullah_Al_Masrur_Resume_React.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="me-4 hover:underline md:me-6"
              >
                <IoDocumentsOutline title="CV" size={30} />
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-400 sm:text-center">
          © 2024 Portfolio . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
