import React from 'react';
import { Box, Container, Heading, Grid } from '@chakra-ui/react';
import { MovieCard } from './MovieCard';
import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

interface Movie {
  [key: string | number]: any;
}
export const Movies: React.FC<any> = ({ movies }) => {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <div className="flex items-center justify-center mt-8 mb-5">
        <h1 className="text-white text-2xl">What's Popular</h1>
        <NextLink href="/movie/bookmark" passHref>
          <ChakraLink
            fontSize={{ base: 'base', md: '2xl' }}
            color="red.600"
            mt={5}
            mx={3}
          >
            Bookmarks
          </ChakraLink>
        </NextLink>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
