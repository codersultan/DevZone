import { demoPost as data } from "cs-demo-data/data";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaRegArrowAltCircleRight,
  FaUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BlogSingle = () => {
  const { id } = useParams();

  const blog = data.find((item) => item.id == id);

  return (
    <>
      <div className="single-page">
        <div className="blog-hero bg-black -z-10">
          <div className="container py-28 mx-auto text-white">
            <h2 className="text-4xl">{blog.title}</h2>

            <div className="meta-box mt-7 flex gap-5">
              <a href="#" className=" flex gap-2 text-sm">
                <FaUser />
                {blog.anthor}
              </a>
              <a href="#" className=" flex gap-2 text-sm">
                <FaCalendarAlt />
                January 13, 2023
              </a>
            </div>

            <div className="social-share mt-5 flex gap-3">
              <a className=" text-white p-3 bg-[#3c4346]" href="#">
                <FaFacebookF />
              </a>
              <a className=" text-white p-3 bg-[#3c4346]" href="#">
                <FaXTwitter />
              </a>
              <a className=" text-white p-3 bg-[#3c4346]" href="#">
                <FaLinkedinIn />
              </a>
              <a className=" text-white p-3 bg-[#3c4346]" href="#">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>

        <div className="blog-content mt-12 mb-20">
          <div className="container mx-auto flex gap-10">
            <div className="blog-data w-3/4 shadow-lg p-6">
              <img className="w-full" src={blog.featuredImg} alt="" />
              <p className="mt-6">{blog.description}</p>
            </div>

            <div className="sitebar w-1/4 shadow-lg p-6">
              <h3 className="text-2xl font-bold">Category</h3>
              <ul>
                <li>
                  <a className="flex gap-2 mt-4  hover:text-[#f05a5e]" href="#">
                    <FaRegArrowAltCircleRight className="self-center text-cyan-400" />
                    Tips and Tricks
                  </a>
                </li>
                <li>
                  <a className="flex gap-2 mt-2  hover:text-[#f05a5e]" href="#">
                    <FaRegArrowAltCircleRight className="self-center text-cyan-400" />
                    MERN Stack
                  </a>
                </li>
                <li>
                  <a className="flex gap-2 mt-2  hover:text-[#f05a5e]" href="#">
                    <FaRegArrowAltCircleRight className="self-center text-cyan-400" />
                    PHP up to date
                  </a>
                </li>
                <li>
                  <a className="flex gap-2 mt-2  hover:text-[#f05a5e]" href="#">
                    <FaRegArrowAltCircleRight className="self-center text-cyan-400" />
                    Web Application Development
                  </a>
                </li>
                <li>
                  <a className="flex gap-2 mt-2  hover:text-[#f05a5e]" href="#">
                    <FaRegArrowAltCircleRight className="self-center text-cyan-400" />
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a className="flex gap-2 mt-2  hover:text-[#f05a5e]" href="#">
                    <FaRegArrowAltCircleRight className="self-center text-cyan-400" />
                    Uncategorized
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;
