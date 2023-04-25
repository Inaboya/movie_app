import { MovieCard } from '@/components/MovieCard';
import { useEffect, useState } from 'react';
import { Movies } from '@/components/Movies';

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
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">What's Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movie.map((movie:any) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: any) {
  const title = params.title;

  return {
    props: {
      title,
    },
  };
}

export async function getStaticPaths() {
  const paths: any[] = [];

  return {
    paths,
    fallback: false,
  };
}
