import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const stan_kyle = require('../../assets/stan_kyle.jpg');
export default function LeftSide() {

  return (
    <div className="leftSide">
      <div className='profile'>
        <img id="profile_pic" src={stan_kyle} alt="profile_pic" />
        <div className="profile_info">
          <h2>Patrick Choi</h2>
          <div className='profile_subheader'>
            <h4>He/They</h4>
            <FontAwesomeIcon icon={faGithubAlt} />    
            <FontAwesomeIcon icon={faLinkedin} />          
          </div>
          <p>I am a software engineer blah blah blah blah blah</p>
          <h4>Skills</h4>
          <p>Javascript, Ruby, Python, HTML, CSS</p>
          <p>React, Ruby on Rails, MERN</p>
        </div>
      </div>



    </div>
  )
}