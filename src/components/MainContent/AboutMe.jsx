import GithubStats from "./GithubStats"

export default function AboutMe(){

  return (
    <div className="aboutme">
      <h1>About Me</h1>
      <div className="aboutme-item">
        <p>Hello, welcome to my personal site! I am a front-end web developer</p>
        <img src="" alt="penguin" />
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