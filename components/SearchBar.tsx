// components/SearchBar.js

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const SearchBar = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="pt-4 flex items-center justify-center">
      <input
        className="border border-gray-300 rounded-md py-2 px-4 w-full sm:max-w-xs"
        type="text"
        placeholder="Search for movies..."
        onChange={handleChange}
        value={title}
      />

      <div className="bg-blue-500 text-white font-bold ml-2 py-2 px-4 rounded-md">
        <Link href={`/movie/movie-title/${title}`}>Search</Link>
      </div>
    </div>
  );
};



export default SearchBar;
