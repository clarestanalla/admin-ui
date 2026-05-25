import React, { useState } from 'react';

function PostCard(props) {
  const { id, userId, title, body } = props;
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div
        className={`p-5 rounded-lg shadow transition duration-300 flex flex-col justify-between ${
            clicked
                ? "bg-pink-100 scale-105 border"
                : "bg-white hover:scale-105 hover:border hover:bg-pink-100"
        }`}>
      
      <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h2>

      <p className="text-gray-600 mb-4 text-center">
        {body}
      </p>

      <button
        className={`text-white p-2 rounded-md transition ${
          clicked
            ? "bg-[--color-special-red2] bg-red-700"
            : "bg-gray-400 hover:bg-red-700"
        }`}
        onClick={handleClick}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>

    </div>
  );
}

export default PostCard;