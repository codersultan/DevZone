import "./Team.scss";
import { teamMembers as data } from "cs-demo-data/data";
import { FaFacebookF, FaLinkedinIn, FaShareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <div className="Team-hero py-20 ">
        <div className="container mx-auto w-2/3 text-center">
          <div className="team-header">
            <h4 className=" uppercase font-bold text-md text-[#aaaaaa]">
              Our Geneous Team
            </h4>
            <h2 className="text-[40px] font-bold">
              Became a Pioneer in
              <span className="text-red-600"> JavaScript</span>
            </h2>
          </div>

          <div className="team-content mt-12 grid grid-cols-3 gap-8">
            {data.map((item) => {
              return (
                <div key={item} className="team-item mr-12">
                  <div className="thumbnail-box relative ">
                    <div className="image overflow-hidden rounded-md cursor-pointer">
                      <Link to={`/team/${item.id}`}>
                        <img
                          className=" w-full h-full object-cover"
                          src={item.photo}
                          alt=""
                        />
                      </Link>
                    </div>
                    <ul className="social absolute bottom-5 right-5">
                      <a target="_blank" href={item.linkdin}>
                        <FaLinkedinIn />
                      </a>
                      <a target="_blank" href={item.twitter}>
                        <FaXTwitter />
                      </a>
                      <a target="_blank" href={item.facebook}>
                        <FaFacebookF />
                      </a>
                      <a href="#">
                        <FaShareAlt />
                      </a>
                    </ul>
                    <div className="meta-box w-full text-left -rotate-90 absolute bottom-[151px] right-[-207px]">
                      <h3 className="font-bold text-lg">
                        <Link to={`/team/${item.id}`}>{item.name}</Link>
                      </h3>
                      <h4 className="text-[#f05a5e] text-[15px] font-medium">
                        {item.skill}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
