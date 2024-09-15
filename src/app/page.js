import Results from "@/components/Results";
import fetch from "node-fetch"; // 添加这一行

const API_KEY = process.env.MOVIE_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
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
