import Link from 'next/link';
import { Box, Image, Text } from '@chakra-ui/react';

export const MovieCard: React.FC<any> = ({ movie }) => {
  return (
    <Link href={`/movie/movie-details/${movie.id}`} passHref>
      <Box bg="white" boxShadow="sm" borderRadius="md" cursor="pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={400}
          height={300}
          borderTopRadius="md"
          alt={movie.title}
        />
        <Box px={6} py={1}>
          <Text fontWeight="bold" fontSize="xl" mb={1}>
            {movie.title}
          </Text>
          <Text color="gray.700" fontSize="base" mb={1}>
            {movie.release_date}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};
