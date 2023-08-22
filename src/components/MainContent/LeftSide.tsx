import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

const resume = require("../../assets/patrick_resume_2023.pdf");
const stan_kyle = require("../../assets/stan_kyle.jpg");
const me = require("../../assets/me.jpg");
const LeftSide: React.FC = () => {
  return (
    <div className="leftSide md:w-1/4">
      <div className="profile p-2 bg-secondaryBG border-2 border-black rounded-md	h-fit">
        <img id="profile_pic" className="mb-1" src={me} alt="profile_pic" />
        {/* <img id="profile_pic" className='mb-1' src={stan_kyle} alt="profile_pic" /> */}

        <div className="profile_info">
          <h2>Patrick Choi</h2>
          <div className="profile_subheader flex flex-row justify-between items-center ">
            <div className="flex flex-col">
              {/* <h3>He/They</h3> */}
              <p className="text-md">ptrckchoi@gmail</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="left-icons-resume flex flex-row md:flex-col xl:flex-row items-center gap-1 mr-2">
                <div className="left-icons flex flex-row gap-2">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faGithubAlt}
                    onClick={() => window.open("https://github.com/patrickwchoi")}
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon={faLinkedin}
                    onClick={() =>
                      window.open("https://linkedin.com/in/patrickwchoi")
                    }
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon={faEnvelope}
                    onClick={() =>
                      window.open(`mailto:$ptrckchoi@gmail.com`, "_blank")
                    }
                  />
                </div>
                <a href={resume} download>
                  <h4 className="icon -translate-y-1">
                    resume <FontAwesomeIcon icon={faDownload} />{" "}
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
