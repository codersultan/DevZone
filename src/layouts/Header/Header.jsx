import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-3 bg-white shadow-lg">
        <div className="container flex justify-between align-middle mx-auto">
          <div className="logo">
            <a href="#">
              <img
                src="https://devzone.com.bd/wp-content/uploads/2024/09/cropped-devzone-logo5-.png"
                alt=""
              />
            </a>
          </div>
          <div className="menu self-center">
            <nav>
              <ul className="flex align-middle gap-8 font-bold ">
                <li>
                  <Link
                    className="hover:text-rose-600 active:text-rose-600"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-rose-600 active:text-rose-600"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-rose-600 active:text-rose-600"
                    to="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-rose-600 active:text-rose-600"
                    to="/service"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-rose-600 active:text-rose-600"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-rose-600 active:text-rose-600"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
