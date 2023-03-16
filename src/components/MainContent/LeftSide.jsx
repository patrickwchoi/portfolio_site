import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'

const stan_kyle = require('../../assets/stan_kyle.jpg');
export default function LeftSide() {

  return (
    <div className="leftSide">
      <div className='profile'>
        <img id="profile_pic" src={stan_kyle} alt="profile_pic" />
        <div className="profile_info">
          <h2>Patrick Choi</h2>
          <div className='profile_subheader row'>
            <h4>He/They</h4>
            <div className="row">
              <FontAwesomeIcon className="icon" icon={faGithubAlt} onClick={() => window.open('https://github.com/patrickwchoi')} />
              <FontAwesomeIcon className="icon" icon={faLinkedin} onClick={() => window.open('https://linkedin.com/in/patrickwchoi')}/>
              <FontAwesomeIcon className="icon" icon={faEnvelope} onClick={() => window.open(`mailto:$ptrckchoi@gmail.com`, '_blank')} />
              <h4 className="icon">resume <FontAwesomeIcon icon={faDownload}/> </h4>
            </div>      

          </div>
        </div>
      </div>



    </div>
  )
}