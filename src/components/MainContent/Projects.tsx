import bagon from "../../assets/bagon.jpg";
import tumble_ss from "../../assets/tumble_screenshot.png";
import singed_ss from "../../assets/mern.jpg";
import congresswatcher_ss from "../../assets/congresswatcher_thin.png";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  function redirectToBagon() {
    window.open(
      "https://patrickwchoi.github.io/javascript_project_AA/",
      "_blank",
    );
  }
  function redirectToTumble() {
    window.open("https://tumble-c367.onrender.com", "_blank");
  }
  function redirectToSinged() {
    window.open("https://singed.onrender.com/", "_blank");
  }
  function redirectToCongressWatcher() {
    window.open("https://congress-watcher.vercel.app/", "_blank");
  }
/* [your imports remain unchanged] */

  return (
    <div className="projects flex flex-col gap-y-5">
      <div className="projects-item flex flex-row justify-between gap-3 items-center">
        <img
          src={congresswatcher_ss}
          alt="penguin"
          className="w-48 hover:-translate-y-1.5 duration-500 pointer"
          onClick={redirectToCongressWatcher}
        />
        <div className="project-text border bg-secondaryBG px-2 py-1">
          <div className="project-title flex flex-row items-center justify-between">
            <h2 className="pointer title_link" onClick={redirectToCongressWatcher}>
              Congress Watcher
            </h2>
            <FontAwesomeIcon
                className="icon"
                icon={faGithubAlt}
                onClick={() => window.open("https://github.com/patrickwchoi/congress-watcher")}
              />
          </div>
          Congress Watcher is a web application designed to simplify access to US Congress news.
            Built with the server-side rendering capabilities of Next.js to efficiently fetch and present real-time data.
            Also integrates REST-ful 3rd party APIs like ProPublica and Wikipedia using Next.js’s built-in API utilities,
            and is styled with TailwindCSS.
        </div>
      </div>
      
      {/* Following the same pattern for other projects */}
      {/* Bagon Adventures */}
      <div className="projects-item flex flex-row justify-between gap-3 items-center">
        <div className="project-text border bg-secondaryBG px-2 py-1">
          <div className="project-title flex flex-row items-center justify-between">
            <h2 className="pointer title_link" onClick={redirectToBagon}>
              Bagon Adventures
            </h2>
            <FontAwesomeIcon
                className="icon"
                icon={faGithubAlt}
                onClick={() => window.open("https://github.com/patrickwchoi/javascript_project_AA")} // Replace with the correct GitHub link
              />
          </div>
          Bagon Adventures is a browser-based game made with vanilla
            Javascript and HTML Canvas. You play as a member of Team Rocket
            trying to evolve your Bagon by interacting with wild pokemon.
            Features include WASD movement, collision detection, sprite
            animations, and gameplay progression. Inspired by Pokemon Mystery
            Dungeon.
        </div>
        <img
          src={bagon}
          alt="penguin"
          className="w-48 hover:-translate-y-1.5 duration-500 pointer"
          onClick={redirectToBagon}
        />
      </div>

      {/* Tumble */}
      <div className="projects-item flex flex-row justify-between gap-3 items-center project-item-alternate">
        <img
          src={tumble_ss}
          alt="penguin"
          className="w-48 hover:-translate-y-1.5 duration-500 pointer"
          onClick={redirectToTumble}
        />
        <div className="project-text border bg-secondaryBG px-2 py-1">
          <div className="project-title flex flex-row items-center justify-between">
            <h2 className="pointer title_link" onClick={redirectToTumble}>
              Tumble
            </h2>
            <FontAwesomeIcon
                className="icon"
                icon={faGithubAlt}
                onClick={() => window.open("https://github.com/patrickwchoi/fullstack_project")} // Replace with the correct GitHub link
              />
          </div>
          Tumble is a fullstack Tumblr clone built with a React/Redux frontend
            and Ruby on Rails backend. Features full CRUD functionality on posts
            and comments as well as partial CRUD for likes and user profiles.
            Utilized AWS S3 for the purpose of image storage, scalability and
            security
        </div>
      </div>

      {/* Singed */}
      <div className="projects-item flex flex-row justify-between gap-3 items-center">
        <div className="project-text border bg-secondaryBG px-2 py-1">
          <div className="project-title flex flex-row items-center justify-between">
            <h2 className="pointer title_link" onClick={redirectToSinged}>
              Singed
            </h2>
            <FontAwesomeIcon
                className="icon"
                icon={faGithubAlt}
                onClick={() => window.open("https://github.com/mfong4151/Singed")} // Replace with the correct GitHub link
              />
          </div>
          Singed is a group project with 3 other contributors for a web
            application that recommends users dishes and restaurants. Built
            using the MERN (MongoDB, Express, React, Node) stack. Focused mainly
            on artistic design and CSS styling.
        </div>
        <img
          src={singed_ss}
          alt="penguin"
          className="w-48 hover:-translate-y-1.5 duration-500 pointer"
          onClick={redirectToSinged}
        />
      </div>
    </div>
  );

}
