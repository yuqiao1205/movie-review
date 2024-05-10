// import Image from 'next/image';
import fetch from 'node-fetch'; 
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;


export default async function MoviePage({ params }) {
  const movieId = params.id;
  console.log(movieId);
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${MOVIE_API_KEY}`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODk2NmMxMzQ0ZDYyMzcyNjdlM2QzM2RmODlhMjU2YiIsInN1YiI6IjY2M2Q1YTFjNzYwMTE1MmZhYjBlYmQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3mbjByyvsWYM8FeHiCi0r55T5YU6H4GiZT7vqgqk9I'
    }
  };

  const res = await fetch(url, options);

  const movie = await res.json();
  console.log(movie);

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=''
          width={500}
          height={300}
          className='rounded-lg'

          // style={{ maxWidth: '100%', height: '100%' }}
        ></img>
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>
          <p className='text-lg mb-3'>{movie.overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>
            {movie.vote_count}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Vote Average:</span>
            {movie.vote_average}
          </p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Origin Country:</span>
            {movie.origin_country}
          </p>
        </div>
      </div>
    </div>
  );
}


