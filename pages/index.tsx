import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { rapidAPIKEY, rapidHost, rapidURL } from '@/config';

export default function Home({ data }) {
  return (
    <>
      <Box p={4} bg="gray.700" color="white" w="100%" h="100vh">
        <Movies movies={data} />
      </Box>
    </>
  );
}

async function getStaticProps() {
  try {
    const { data } = await axios.get(rapidURL, {
      headers: {
        'x-rapidapi-key': rapidAPIKEY,
        'x-rapidapi-host': rapidHost,
      },
    });
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
