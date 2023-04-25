import axios from 'axios';
// import Image from 'next/image';
import { Meta } from '@/components/Meta';
import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import { apiKey } from '@/config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure(); // Toastify config


export default function MovieDetails({ movie }: any) {
  const bookmarkMovies = () => {
    if (typeof window !== 'undefined') {
      const movies = JSON.parse(localStorage.getItem('watched') as string);

      if (movies) {
        const isExist = movies.find((el: any) => el.id === movie.id);

        console.log(isExist, 'wetin be isExist')

        if (isExist) {
          toast.error('Movie already bookmarked', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        } else {
          movies.push(movie);
          localStorage.setItem('watched', JSON.stringify(movies));
          toast.success('Movie bookmarked', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      } else {
        localStorage.setItem('watched', JSON.stringify([movie]));
        toast.success('Movie bookmarked', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    }
  };
 return (
    <Box maxW="4xl" mx="auto" pt="6">
      <Meta title={movie.title} />
      <Box px="3">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          w={1000}
          h={600}
          borderRadius="md"
          alt={movie.title}
        />
        <Heading fontWeight="bold" fontSize="xl" mt="2">
          {movie.title}
        </Heading>
        <Text color="gray.600" fontSize="sm" mt="4">
          {movie.overview}
        </Text>
        <Text color="gray.600" fontSize="sm" mt="5">
          Genres:{' '}
          <Text as="span" fontWeight="bold">
            {movie.genres.map((genre: any) => genre.name).join(', ')}
          </Text>
        </Text>
        <Text color="gray.600" fontSize="sm">
          Release Date:{' '}
          <Text as="span" fontWeight="bold">
            {movie.release_date}
          </Text>
        </Text>
        <Button
          mt="5"
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          borderRadius="md"
          onClick={bookmarkMovies}
        >
          Save as Watched
        </Button>
      </Box>
    </Box>
  );
}

export async function getStaticProps({ params }: any) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&page=1`,
  );

  const movie = res.data;

  return {
    props: {
      movie,
    },
  };
}

export async function getStaticPaths() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  );

  const ids = res.data.results.map((movie: any) => movie.id);

  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}
