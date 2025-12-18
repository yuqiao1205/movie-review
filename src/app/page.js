import Results from "@/components/Results";
import fetch from "node-fetch";
import Link from 'next/link';

const API_KEY = process.env.MOVIE_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  let endpoint;
  if (genre === "fetchTopRated") {
    endpoint = "/movie/top_rated";
  } else if (genre === "fetchNowPlaying") {
    endpoint = "/movie/now_playing";
  } else if (genre === "fetchUpcoming") {
    endpoint = "/movie/upcoming";
  } else {
    endpoint = "/trending/all/week";
  }

  // Fetch multiple pages to get more movies (pages 1, 2, 3 = 60 movies total)
  const pages = [1, 2, 3];
  const allResults = [];

  // Get today's date for filtering upcoming movies
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  for (const page of pages) {
    let url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`;

    // For upcoming movies, only show movies with release date >= today
    if (genre === "fetchUpcoming") {
      url += `&release_date.gte=${today}`;
    }

    const res = await fetch(url, { next: { revalidate: 10000 } });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    allResults.push(...data.results);
  }

  const results = allResults;

  const featuredMovie = results[0]; // Take the first movie as featured

  const genreLabel =
    genre === 'fetchTrending'
      ? 'Trending Now'
      : genre === 'fetchTopRated'
        ? 'Top Rated'
        : genre === 'fetchNowPlaying'
          ? 'Now Playing'
          : 'Upcoming';

  return (
    <main className='pb-10'>
      {/* Hero Section */}
      <section className='px-4 mt-8'>
        <div className='glass glass-border max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden'>
          <div className='relative'>
            {featuredMovie?.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
                alt={featuredMovie.title || featuredMovie.name}
                className='absolute inset-0 w-full h-full object-cover scale-105'
              />
            )}

            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20' />
            <div className='absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20' />

            <div className='relative px-6 py-14 sm:px-10 sm:py-20 text-white'>
              <div className='flex flex-wrap items-center justify-center gap-3 text-center'>
                <span className='chip bg-white/10 ring-1 ring-white/20 backdrop-blur-md'>
                  {genreLabel}
                </span>
                {featuredMovie?.vote_average && (
                  <span className='chip bg-white/10 ring-1 ring-white/20 backdrop-blur-md'>
                    Rating {(featuredMovie.vote_average / 2).toFixed(1)}/5
                  </span>
                )}
              </div>

              <h1 className='mt-6 text-center text-4xl sm:text-5xl font-bold tracking-tight'>
                Find your next favorite movie
              </h1>
              <p className='mt-4 text-center text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed'>
                Browse curated lists from TMDb — trending, top-rated, upcoming, and what’s playing now.
              </p>

              <div className='mt-8 flex items-center justify-center gap-3'>
                <Link href='/?genre=fetchTrending' className='btn-primary px-6'>
                  Explore trending
                </Link>
                <a href='#results' className='btn-ghost px-6 text-white'>
                  Browse list
                </a>
              </div>

              {featuredMovie && (
                <div className='mt-10 max-w-3xl mx-auto text-center'>
                  <div className='text-xs uppercase tracking-[0.18em] text-white/60'>Featured</div>
                  <div className='mt-2 text-xl font-semibold'>{featuredMovie.title || featuredMovie.name}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div id='results' className='scroll-mt-28'>
        <Results results={results} />
      </div>
    </main>
  );
}

// export default async function Home({ searchParams }) {
//   const genre = searchParams.genre || "fetchTopRated";
//   const url = `https://api.themoviedb.org/3${
//     genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
//   }?api_key=${MOVIE_API_KEY}&language=en-US&page=1`;

//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzgzODQ5OWNjMjAxMTdmNjZjNGEyNWM4NDM0OTE3MSIsIm5iZiI6MTcyNjQzMzA3Mi45MDY3MTYsInN1YiI6IjY2ZTBjYTMxZTc3MGVhMWJiOTM2ODQ5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-YlR7i9y5mBYvFeCxmkE-igiBtW5Lv2Fxizs1ow3Ja8",
//     },
//   };

//   const res = await fetch(url, options);
//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const results = data.results;

//   return (
//     <div>
//       <Results results={results} />
//     </div>
//   );
// }
