import { AiOutlineInstagram } from "react-icons/ai";
import { BsDribbble } from "react-icons/bs";
import {CiFacebook, CiTwitter} from "react-icons/ci"
import { FaGithubAlt } from "react-icons/fa";
import logo from "../../../assets/logo.svg"

const Footer = () => {
    return (
        <div className="dark:bg-gray-400 bg-gray-900 container mx-auto">
            
<footer className="lg:mx-20">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                  <img src={logo} className="h-10 lg:h-16 invert dark:invert-0 mr-3" alt="car doctor Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-[#000]">Car Doctor</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold dark:text-gray-900 uppercase text-white">Resources</h2>
                  <ul className="dark:text-gray-600 text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">About</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Services</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold dark:text-gray-900 uppercase text-white">Follow us</h2>
                  <ul className="dark:text-gray-600 text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold dark:text-gray-900 uppercase text-white">Legal</h2>
                  <ul className="dark:text-gray-600 text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center dark:text-gray-900">© 2023 <a href="#" className="hover:underline">Programming Hero™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 dark:hover:text-gray-900 hover:text-white">
                 <CiFacebook/>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 dark:hover:text-gray-900 hover:text-white">
                  <AiOutlineInstagram/>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-500 dark:hover:text-gray-900 hover:text-white">
                 <CiTwitter/>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 dark:hover:text-gray-900 hover:text-white">
                 <FaGithubAlt/>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 dark:hover:text-gray-900 hover:text-white">
                  <BsDribbble/>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

        </div>
    );
};

export default Footer;