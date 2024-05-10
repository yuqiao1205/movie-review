import Results from '@/components/Results';

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`;
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  // );
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODk2NmMxMzQ0ZDYyMzcyNjdlM2QzM2RmODlhMjU2YiIsInN1YiI6IjY2M2Q1YTFjNzYwMTE1MmZhYjBlYmQ1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3mbjByyvsWYM8FeHiCi0r55T5YU6H4GiZT7vqgqk9I'
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();

  console.log( "data=" + data);
  const results = data.results;
  console.log("search reslut=" + results);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return (
    <div>
      {results &&
        results.length === 
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
