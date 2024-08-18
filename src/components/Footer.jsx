import icon from "/icon.png";
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
          >
            <img src={icon} class="h-8 pt-2" alt="Logo" />
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Portfolio
            </span>
          </a>
          <ul class="mb-6 flex flex-wrap items-center gap-5 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="https://github.com/Root1-2" class="me-4 md:me-6">
                <FaGithub title="GitHub Profile" size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdullah-al-masrur-839000222/"
                class="me-4 hover:underline md:me-6"
              >
                <FaLinkedinIn title="LinkedIn Profile" size={30} />
              </a>
            </li>
            <li>
              <a href="/CV.pdf" class="me-4 hover:underline md:me-6">
                <IoDocumentsOutline title="CV" size={30} />
              </a>
            </li>
            <li>
              <a href="#" class="me-4 hover:underline md:me-6">
                <FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Portfolio
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
