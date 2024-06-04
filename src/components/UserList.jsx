import React from "react";
import ArtistCard from "./ArtistCard";
import pfp1 from "../assets/pfp1.jpeg";
import pfp2 from "../assets/pfp2.jpeg";
import pfp3 from "../assets/pfp3.jpeg";
import photo1 from '../assets/photo1.jpeg';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo3.jpeg';
import photo4 from '../assets/photo4.jpeg';

function UserList() {
  const artists = [
    { name: "Thomas Edward", handle: "@thewildwithyou", imageUrl: pfp1, bg: photo1 },
    { name: "Chris Doe", handle: "@thewildwithyou", imageUrl: pfp2, bg: photo2 },
    { name: "Emilie Jones", handle: "@thewildwithyou", imageUrl: pfp3, bg: photo3 },
    { name: "Jessica Williams", handle: "@thewildwithyou", imageUrl: pfp1, bg:photo4 },
  ];

  return (
    <div className="bg-gray-100 px-2 py-2 shadow-md">
      <div className="w-[100%]">
        <button className="p-2 bg-green-500 hover:bg-green-700 text-white w-full py-5 rounded-lg">
          Become a Seller
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Artists</h2>
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            name={artist.name}
            handle={artist.handle}
            imageUrl={artist.imageUrl}
            bg={artist.bg}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;
