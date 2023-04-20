import axios from 'axios';
import Image from 'next/image';
import { Meta } from '@/components/Meta';
import { apiKey } from '@/config';

export default function MovieDetails({ movie }: any) {
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <Meta title={movie.title} />
      <div className="px-3">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          width={1000}
          height={600}
          className="rounded-md"
          alt={movie.title}
        />
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">
          Genres:{' '}
          <span className="font-bold">
            {movie.genres.map((genre: any) => genre.name).join(', ')}
          </span>
        </p>
        <p className="text-gray-600 text-sm">
          Release Date: <span className="font-bold">{movie.release_date}</span>
        </p>
      </div>
    </div>
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
