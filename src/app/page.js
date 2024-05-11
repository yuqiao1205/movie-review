import Results from '@/components/Results';
import fetch from 'node-fetch'; // 添加这一行

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTopRated';
  const url = `https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
  }?api_key=${MOVIE_API_KEY}&language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODk2NmMxMzQ0ZDYyMzcyNjdlM2QzM2RmODlhMjU2YiIsInN1YiI6IjY2M2Q1YTFjNzYwMTE1MmZhYjBlYmQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3mbjByyvsWYM8FeHiCi0r55T5YU6H4GiZT7vqgqk9I'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
