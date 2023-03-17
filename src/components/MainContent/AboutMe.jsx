import GithubStats from "./GithubStats"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFileLines} from '@fortawesome/free-regular-svg-icons'
import Interests from "./Interests"

const riley = require("../../assets/riley_baby.jpg")

export default function AboutMe(){

  return (
    <div className="aboutme">
      <div className="aboutme-firstitem aboutme-item2">
        <div className="aboutme-item-small">
          <div className="aboutme-hello row">
            <h2>Hello!</h2>
            <div className="icons">
              <FontAwesomeIcon className="icon" icon={faGithubAlt} onClick={() => window.open('https://github.com/patrickwchoi')} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} onClick={() => window.open('https://linkedin.com/in/patrickwchoi')}/>
              <FontAwesomeIcon className="icon" icon={faEnvelope} onClick={() => window.open(`mailto:$ptrckchoi@gmail.com`, '_blank')} />
            </div>
          </div>
          <p>Welcome to my personal site! I am a fullstack software engineer living in the San Francisco Bay Area. 
            I'm looking forward to growing my skills as an engineer and contributing to projects I find enjoyable!
            In my free time, I enjoy reading manga, playing sports, and taking pictures of my cat.
          </p>
        </div>
        <div className="aboutme-img-container">
          <img src={riley} alt="penguin" className="aboutme-img1"/>
          <p>My cat Riley :3</p>
        </div>
      </div>
      <div className="aboutme-item2 skills-container">
        <div className="aboutme-item-small aboutme-skills">
          <h2>Frameworks</h2>
          <ul>
            <li>React.js/Redux</li>
            <li>Ruby on Rails</li>
            <li>MERN</li>
          </ul>
        </div>
        <div className="aboutme-item-small aboutme-skills">
          <h2>Languages</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Ruby</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="resume-big">
          <a href="../../patrick_resume_2023.pdf" download>
            <FontAwesomeIcon className="resume-icon icon" icon={faFileLines} onClick={() => window.open(`mailto:$ptrckchoi@gmail.com`, '_blank')} />
          </a>
          <h2>Download my Resume!</h2>
        </div>
      </div>
      <GithubStats />
      <Interests/>
    </div>
  )
}