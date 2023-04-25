import Link from 'next/link';
import { Box, Image, Text } from '@chakra-ui/react';

export const MovieCard: React.FC<any> = ({ movie }) => {
  return (
    <Link href={`/movie/movie-details/${movie.id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={400}
          height={300}
          className="rounded-t-md"
          alt={movie.title}
        />
        <div className="px-6 py-1">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};
