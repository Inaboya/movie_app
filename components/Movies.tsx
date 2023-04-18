import React from 'react';
import { Box, Container, Heading, Grid } from '@chakra-ui/react';

interface Movie { 
    [key: string | number]: any;
}
export const Movies: React.FC<Movie> = ({ movies }) => {
  return (
    <Box bg="gray.700" pb={10} px={4}>
      <Heading as="h1" color="white" fontSize="2xl" mt={8} mb={5}>
        What's Popular
      </Heading>
      <Grid gap={4} templateColumns="repeat(auto-fill, minmax(0, 1fr))">
        {movies.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Grid>
    </Box>
  );
};
