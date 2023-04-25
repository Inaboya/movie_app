import { MovieCard } from '@/components/MovieCard';
import { Movies } from '@/components/Movies';
import SearchBar from '@/components/SearchBar';
import React, { useEffect, useState } from 'react';

const BookmarkMovies = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
      setData(JSON.parse(localStorage.getItem('watched') as string));
  }, []);
    
    console.log({ data })
    const movies = [data]
  return (
      <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie:any) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default BookmarkMovies;
