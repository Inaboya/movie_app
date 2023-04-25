import axios from 'axios';
import { Movies } from '@/components/Movies';
import { apiKey } from '@/config';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';
import { Box } from '@chakra-ui/react';

export default function Home({ data }: any) {
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(data));
  }, []);

  return (
    <>
      <Layout>
        <Box bg="gray.700" w="full" h="full">
          <SearchBar />
          <Movies movies={data} />
        </Box>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  );

  const data = res.data.results;

  return {
    props: {
      data,
    },
  };
}
