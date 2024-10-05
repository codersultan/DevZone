import { useParams } from "react-router-dom";
import { teamMembers as data } from "cs-demo-data/data";
import { FaFacebookF, FaLinkedinIn, FaShareAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TeamSingle = () => {
  const { id } = useParams();
  const team = data.find((item) => item.id == id);

  return (
    <>
      <section className="team-hero  bg-[#f5f9fa] py-24">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center">Instructor Details</h2>
        </div>
      </section>

      <section className="single-team py-20">
        <div className="container mx-auto flex gap-20 w-2/3">
          <div className="single-thumbnail">
            <div className="single-photo w-[330px] h-[330px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={team.photo}
                alt=""
              />
            </div>
            <ul className="flex justify-center gap-5 mt-8">
              <li>
                <a
                  className="p-3 text-lg border inline-block rounded-full text-[#808080] hover:bg-[#808080] hover:text-white"
                  target="_blank"
                  href={team.linkdin}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  className="p-3 text-lg border inline-block rounded-full text-[#808080] hover:bg-[#808080] hover:text-white"
                  target="_blank"
                  href={team.twitter}
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  className="p-3 text-lg border inline-block rounded-full text-[#808080] hover:bg-[#808080] hover:text-white"
                  target="_blank"
                  href={team.facebook}
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="p-3 text-lg border inline-block rounded-full text-[#808080] hover:bg-[#808080] hover:text-white"
                  href="#"
                >
                  <FaShareAlt />
                </a>
              </li>
            </ul>
          </div>

          <div className="single-info">
            <h4 className="font-bold text-[15px] text-md text-[#aaaaaa]">
              INSTRUCTOR
            </h4>
            <h2 className="font-bold text-3xl my-2">{team.name}</h2>
            <h5 className="font-[500] text-[14px] text-md text-[#aaaaaa]">
              {team.skill}
            </h5>

            <h3 className=" font-bold text-2xl mt-8 mb-3">About Me</h3>
            <p className=" text-md text-[#aaaaaa]">
              Lorem ipsum dolor sit amet, consectetur elit sed do eius mod
              tempor incidid labore dolore magna aliqua. enim ad minim eniam
              quis nostrud exercitation ullamco laboris nisi aliquip ex commodo
              consequat. duis aute irure dolor in repreed ut perspiciatis unde
              omnis iste natus error sit voluptat em acus antium.
              <br />
              <br />
              doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi arch itecto beatae vitae dicta sunt
              explicabo.
              <br />
              <br />
              doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis et quasi arch itecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSingle;
