import axios from 'axios';
import { Movies } from '@/components/Movies';
import { apiKey } from '@/config';

export default function Home({ data }: any) {
  return (
    <>
      <div className="bg-gray-700">
        <Movies movies={data} />
      </div>
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
