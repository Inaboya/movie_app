import Link from 'next/link';
import { Box, Image, Text } from '@chakra-ui/react';

const MovieCard: React.FC<any> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} passHref>
      <Box bg="white" shadow="sm" rounded="md" cursor="pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-md"
          alt={movie.title}
        />
        <Box px={6} py={2}>
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
