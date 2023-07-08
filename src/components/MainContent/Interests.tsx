import React from "react";

const Interests: React.FC = () => {
  return (
    <div className="flex flex-col bg-secondaryBG border w-fit p-3 pt-1">
      <h2>Interests</h2>
      <p>I love talking about these things :{"}"}</p>
      <div className="flex flex-col">
        <div className="flex flex-row gap-1 items-center">
          <h4>Song:</h4>
          <p>Skiptracing Lullaby</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Animal:</h4>
          <p>Cats</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Game:</h4>
          <p>Pokemon, Tears of the Kingdom</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Food:</h4>
          <p>Soondubu</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Sport:</h4>
          <p>Basketball, Soccer</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Manga:</h4>
          <p>Chainsaw Man</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Movie:</h4>
          <p>Scott Pilgrim vs The World</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>TV:</h4>
          <p>South Park</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Artist:</h4>
          <p>Men I Trust</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Hometown:</h4>
          <p>South San Francisco</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <h4>Who I'd Like to Meet:</h4>
          <p>Ice Spice</p>
        </div>
      </div>
    </div>
  );
};
export default Interests;
