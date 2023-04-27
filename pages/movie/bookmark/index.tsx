import { MovieCard } from '@/components/MovieCard';
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';

const BookmarkMovies = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('watched') as string));
  }, []);

  // console.log({ data })
  const movies = data;
  return (
    <Box bg="gray.700" pb={10} px={4} maxW="7xl" mx="auto">
      <Heading color="white" fontSize="2xl" mt={8} mb={5}>
        What's Popular na
      </Heading>
      <Grid
        gap={4}
        templateColumns={{
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
      >
        {data ? (
          movies.map((movie: any) => <MovieCard movie={movie} key={movie.id} />)
        ) : (
          <Heading color="white" fontSize="2xl" mt={8} mb={5}>
            No Movies
          </Heading>
        )}
      </Grid>
    </Box>
  );
};

export default BookmarkMovies;
