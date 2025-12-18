import fetch from "node-fetch";
import { FiStar, FiCalendar, FiGlobe, FiClock } from 'react-icons/fi';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_API_KEY}`
  );
  const movie = await res.json();

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : null;

  const posterUrl = movie.poster_path || movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  const rating5 = movie.vote_average ? (movie.vote_average / 2).toFixed(1) : null;

  return (
    <div className="min-h-screen pb-10">
      <section className="px-4 mt-8">
        <div className="glass glass-border max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden">
          <div className="relative">
            {backdropUrl && (
              <img
                src={backdropUrl}
                alt={movie.title || movie.name}
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15" />

            <div className="relative px-6 py-10 sm:px-10 sm:py-14">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Poster */}
                <div className="flex-shrink-0 flex justify-center lg:justify-start">
                  <div className="glass-border rounded-3xl overflow-hidden">
                    <img
                      src={posterUrl}
                      alt={movie.title || movie.name}
                      className="w-56 sm:w-64 aspect-[2/3] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {movie.release_date && (
                      <span className="chip bg-white/10 ring-1 ring-white/15 text-white backdrop-blur-md">
                        <FiCalendar />
                        {movie.release_date}
                      </span>
                    )}
                    {movie.runtime && (
                      <span className="chip bg-white/10 ring-1 ring-white/15 text-white backdrop-blur-md">
                        <FiClock />
                        {movie.runtime}m
                      </span>
                    )}
                    {rating5 && (
                      <span className="chip bg-white/10 ring-1 ring-white/15 text-white backdrop-blur-md">
                        <FiStar className="text-yellow-300" />
                        {rating5}/5
                      </span>
                    )}
                  </div>

                  <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                    {movie.title || movie.name}
                  </h1>
                  {movie.tagline && (
                    <p className="mt-2 text-white/80 italic">{movie.tagline}</p>
                  )}

                  <p className="mt-6 text-white/85 leading-relaxed text-base sm:text-lg">
                    {movie.overview}
                  </p>

                  {movie.genres?.length > 0 && (
                    <div className="mt-6">
                      <div className="text-xs uppercase tracking-[0.18em] text-white/60">Genres</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {movie.genres.map((g) => (
                          <span
                            key={g.id}
                            className="chip bg-white/10 ring-1 ring-white/15 text-white backdrop-blur-md"
                          >
                            {g.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {movie.origin_country?.length > 0 && (
                    <div className="mt-6 flex items-center gap-3 text-white/80">
                      <FiGlobe className="text-sky-200" />
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-white/60">Country</div>
                        <div className="font-semibold">{movie.origin_country.join(', ')}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
