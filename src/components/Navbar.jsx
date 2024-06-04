import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="flex justify-between items-center mb-6 mx-5">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 flex-grow border border-gray-300 rounded-3xl mr-4 lg:w-[90%] px-5"
        />
        <button className="p-2 text-white rounded mr-2 justify-center">
          <FontAwesomeIcon icon={faSliders} style={{ color: 'black' }} className="size-6" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
