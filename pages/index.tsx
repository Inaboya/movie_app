import axios from 'axios';
import { Movies } from '@/components/Movies';
import { apiKey } from '@/config';
import SearchBar from '@/components/SearchBar';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Layout } from '@/components/Layout';
// import NextLink from 'next/link';
// import { Box, Link as ChakraLink } from '@chakra-ui/react';

export default function Home({ data }: any) {
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(data));
  }, []);

  return (
    <>
      <Layout>

        <div className="bg-gray-700">
          <SearchBar />
          <Movies movies={data} />
        </div>
      </Layout>
    </>
  );
}

// "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
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
