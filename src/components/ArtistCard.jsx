import React from "react";

function ArtistCard({ name, handle, imageUrl, bg }) {
  return (
    <div
      className="flex items-center mb-4 p-10 rounded-md"
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <div className="flex items-end text-white">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-500">{handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
