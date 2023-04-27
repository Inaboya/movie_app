import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
} from '@chakra-ui/react';
import { MovieCard } from './MovieCard';
import NextLink from 'next/link';

interface Movie {
  [key: string | number]: any;
}
export const Movies: React.FC<any> = ({ movies }) => {
  return (
    <Box bg="gray.700" maxW="7xl" mx="auto" pb={10} px={4}>
      <Flex alignItems="center" justify="center" mt={8} mb={5}>
        <Heading color="white" fontSize={{ base: '2xl', md: '2xl' }} mr={3}>
          What's Popular na
        </Heading>

        <Box
          color="red.600"
          mt={{ base: 5, md: 0 }}
          mx={3}
          fontSize={{ base: 'base', md: '2xl' }}
        >
          <NextLink href="/movie/bookmark" passHref>
            Bookmarks
          </NextLink>
        </Box>
      </Flex>

      <SimpleGrid gap={4} columns={{ base: 1, sm: 2, md: 3, lg: 5 }}>
        {movies.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
