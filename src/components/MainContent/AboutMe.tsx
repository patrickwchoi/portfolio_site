import React from 'react';
import GithubStats from "./GithubStats"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFileLines} from '@fortawesome/free-regular-svg-icons'
import Interests from "./Interests"
// import patrick_resume_2023 from "../../assets/patrick_resume_2023.pdf"
const resume = require("../../assets/patrick_resume_2023.pdf")
const riley = require("../../assets/riley_baby.jpg")

const AboutMe: React.FC = () => {

  return (
    <div className="aboutme flex flex-col ">
      <div className="flex flex-row gap-x-2 justify-between">
        <div className="aboutme-hello bg-secondaryBG border-2 max-w-xs px-2 pb-1">
          <div className="flex flex-row justify-between pt-1.5 items-center">
            <h2 className='ml-1'>Hello!</h2>
            <div className="flex flex-row gap-2 ">
              <FontAwesomeIcon className="icon" icon={faGithubAlt} onClick={() => window.open('https://github.com/patrickwchoi')} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} onClick={() => window.open('https://linkedin.com/in/patrickwchoi')}/>
              <FontAwesomeIcon className="icon" icon={faEnvelope} onClick={() => window.open(`mailto:$ptrckchoi@gmail.com`, '_blank')} />
            </div>
          </div>
          <p>Welcome to my personal site! My name is Patrick Choi and I am a fullstack software engineer living in the San Francisco Bay Area. 
            I'm looking forward to growing my skills as an engineer and contributing to projects I find enjoyable!
            In my free time, I enjoy reading manga, playing sports, and taking pictures of my cat.
          </p>
        </div>
        <div className="flex flex-col items-center border-2 bg-secondaryBG p-2 h-fit">
          <img src={riley} alt="penguin" className="object-cover"/>
          <p>My cat Riley :3</p>
        </div>
      </div>
      <div className="skills-container flex flex-row justify-around py-4">
        <div className="bg-secondaryBG border-2 p-2 h-fit">
          <h2>Frameworks</h2>
          <ul className="mt-1 pl-2">
            <li>React.js/Redux</li>
            <li>Next.js</li>
            <li>Ruby on Rails</li>
            <li>MERN</li>
          </ul>
        </div>
        <div className="bg-secondaryBG border-2 p-2 h-fit">
          <h2>Languages</h2>
          <ul className='mt-1 pl-2'>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>HTML/CSS</li>
            <li>Ruby</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="resume-big flex flex-col items-center justify-center">
          <a href={resume} download>
            <FontAwesomeIcon className="resume-icon icon" icon={faFileLines} />
          </a>
          <h2>Download my Resume!</h2>
        </div>
      </div>
      <GithubStats />
      <Interests/>
    </div>
  )
}
export default AboutMe;