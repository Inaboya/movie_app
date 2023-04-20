import React from 'react';
import { Box, Container, Heading, Grid } from '@chakra-ui/react';
import { MovieCard } from './MovieCard';

interface Movie { 
    [key: string | number]: any;
}
export const Movies: React.FC<any> = ({ movies }) => {
  return (
     <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie:any) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};
