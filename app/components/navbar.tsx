import Link from "next/link";
import { MdOutlineCloudDownload } from "react-icons/md";

function Navbar() {
  return (
    <div className="position  sticky top-0 bg-gray-50 ">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold text-blue-800">
              Gulshan Corporation
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-gray-900">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-gray-900">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <a href="/assets/cv.png" target="_blank">
          <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
            Download CV
            <MdOutlineCloudDownload className=" ml-1 text-xl" />
          </button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
