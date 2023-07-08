import bagon from "../../assets/bagon.jpg";
import tumble_ss from "../../assets/tumble_screenshot.png";
import singed_ss from "../../assets/mern.jpg";

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
  return (
    <div className="projects flex flex-col gap-y-5">
      <div className="projects-item flex flex-row justify-between gap-3 items-center">
        <div className="project-text border bg-secondaryBG px-2 py-1">
          <h2 className="pointer title_link" onClick={redirectToBagon}>
            Bagon Adventures
          </h2>
          <p>
            Bagon Adventures is a browser-based game made with vanilla
            Javascript and HTML Canvas. You play as a member of Team Rocket
            trying to evolve your Bagon by interacting with wild pokemon.
            Features include WASD movement, collision detection, sprite
            animations, and gameplay progression. Inspired by Pokemon Mystery
            Dungeon.
          </p>
        </div>
        <img
          src={bagon}
          alt="penguin"
          className="w-48 hover:-translate-y-1.5 duration-500 pointer"
          onClick={redirectToBagon}
        />
      </div>

      <div className="projects-item flex flex-row justify-between gap-3 items-center project-item-alternate">
        <img
          src={tumble_ss}
          alt="penguin"
          className="w-48 hover:-translate-y-1.5 duration-500 pointer"
          onClick={redirectToTumble}
        />
        <div className="project-text border bg-secondaryBG px-2 py-1">
          <h2 className="pointer title_link" onClick={redirectToTumble}>
            Tumble
          </h2>
          <p>
            Tumble is a fullstack Tumblr clone built with a React/Redux frontend
            and Ruby on Rails backend. Features full CRUD functionality on posts
            and comments as well as partial CRUD for likes and user profiles.
            Utilized AWS S3 for the purpose of image storage, scalability and
            security.
          </p>
        </div>
      </div>

      <div className="projects-item flex flex-row justify-between gap-3 items-center">
        <div className="project-text border bg-secondaryBG px-2 py-1">
          <h2 className="pointer title_link" onClick={redirectToSinged}>
            Singed
          </h2>
          <p>
            Singed is a group project with 3 other contributors for a web
            application that recommends users dishes and restaurants. Built
            using the MERN (MongoDB, Express, React, Node) stack. Focused mainly
            on artistic design and CSS styling.
          </p>
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
