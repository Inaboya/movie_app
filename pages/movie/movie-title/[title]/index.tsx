import { MovieCard } from '@/components/MovieCard';
import { useEffect, useState } from 'react';
import { Box, Container, Heading, Grid } from '@chakra-ui/react';

export default function MovieTitles({ title }: any) {
  const [data, setData] = useState<any>([]);
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('movies') as string));
  }, []);

  useEffect(() => {
    const regex = new RegExp(title, 'gi');

    const filtered = data.filter((el: any) => {
      return regex.test(el.title);
    });

    setMovie(filtered);
  }, [data, title]);

  return (
    <Box bg="gray.700" pb="10" px="4">
      <Container maxW="7xl" mx="auto" mt="8" mb="5">
        <Heading color="white" fontSize="2xl">
          What's Popular
        </Heading>
      </Container>
      <Grid
        gap="4"
        templateColumns={{
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(5, 1fr)',
        }}
      >
        {movie.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Grid>
    </Box>
  );
}

let titled: any = [];

export async function getStaticProps({ params }: any) {
  const title = params.title;

  return {
    props: {
      title,
    },
  };
}

export async function getStaticPaths() {
  const paths = titled.map((title: string) => ({ params: { title } }));

  return {
    paths,
    fallback: false,
  };
}
