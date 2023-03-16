import GithubStats from "./GithubStats"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const riley = require("../../assets/riley_baby.jpg")

export default function AboutMe(){

  return (
    <div className="aboutme">
      <div className="aboutme-firstitem aboutme-item2">
        <div className="aboutme-item-small">
          <div className="aboutme-hello row">
            <h3>Hello!</h3>
            <div className="icons">
              <FontAwesomeIcon className="icon" icon={faGithubAlt} onClick={() => window.open('https://github.com/patrickwchoi')} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} onClick={() => window.open('https://linkedin.com/in/patrickwchoi')}/>
              <FontAwesomeIcon className="icon" icon={faEnvelope} onClick={() => window.open(`mailto:$ptrckchoi@gmail.com`, '_blank')} />
            </div>
          </div>
          <p>Welcome to my personal site! I am software engineer living in the San Francisco Bay Area. </p>
        </div>
        <img src={riley} alt="penguin" className="aboutme-img1"/>
      </div>
      <div className="aboutme-item2">
        <div className="aboutme-item-small">
          <h2>Frameworks</h2>
          <p>React.js, Redux, Ruby on Rails, MERN</p>
          <h2>Languages</h2>
          <p>JavaScript, HTML, CSS, Ruby, Python</p>
        </div>
        <div className="aboutme-item-small">
          <h2>Likes</h2>
          <p>Cats, </p>
          <h2>Dislikes</h2>
          <p>chocolate, </p>
        </div>
      </div>
      <div className="aboutme-item2">
        <div className="aboutme-item-small">
          <h2>Contact Me!</h2>
          
        </div>
      </div>
      <GithubStats />
    </div>
  )
}