import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top-footer py-20 bg-[#f0f4f5]  ">
          <div className="container mx-auto flex gap-10">
            <div className="widget w-1/4">
              <img
                src="https://devzone.com.bd/wp-content/uploads/2024/09/cropped-devzone-logo5-.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                temporibus repellat suscipit architecto nostrum dicta animi
                tempore sit doloribus aliquid?
              </p>
            </div>
            <div className="widget w-1/4">
              <h3 className="text-xl font-extrabold">Online Platform</h3>
              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="widget w-1/4">
              <h3 className="text-xl font-extrabold">Links</h3>
              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <a href="#">Instructor Details</a>
                </li>
                <li>
                  <a href="#">News & Articles</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">FAQ’s</a>
                </li>
                <li>
                  <a href="#">Coming Soon</a>
                </li>
                <li>
                  <a href="#">Sign In/Registration</a>
                </li>
              </ul>
            </div>
            <div className="widget w-1/4">
              <h3 className="text-xl font-extrabold">Contacts</h3>
              <p className="mt-6">
                Enter your email address to register to our newsletter
                subscription
              </p>

              <div className="signup-form my-6 flex">
                <input
                  className="py-3 px-5 rounded-md"
                  type="email"
                  placeholder="Your email"
                />
                <a
                  className="py-3 px-5 rounded-md bg-[#f05a5e] font-bold text-white ml-3 flex"
                  href="#"
                >
                  Subscribe
                  <FaArrowRightLong className="self-center ml-2" />
                </a>
              </div>

              <div className="social-links flex gap-4">
                <a className="text-blue-500 text-lg" href="#">
                  <FaFacebookF />
                </a>

                <a className="text-blue-900 text-lg" href="#">
                  <FaLinkedinIn />
                </a>

                <a className="text-red-500 text-lg" href="#">
                  <FaInstagram />
                </a>

                <a className="text-blue-500 text-lg" href="#">
                  <FaTwitter />
                </a>

                <a className="text-red-700 text-lg" href="#">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-footer bg-[#ebeff0] py-8">
          <p className="text-center font-semibold">
            Copyright 2024 DevZone | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
