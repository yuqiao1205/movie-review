import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <main className="min-h-screen pb-10">
      <section className="px-4 mt-8">
        <div className="glass glass-border max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden">
          <div className="px-6 py-10 sm:px-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Search Results
              </h1>
              <p className="mt-3 text-base sm:text-lg text-current/75">
                Showing results for <span className="font-semibold text-current">“{searchTerm}”</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {results && results.length === 0 && (
        <section className="px-4 mt-8">
          <div className="glass glass-border max-w-3xl mx-auto rounded-[2.5rem] overflow-hidden">
            <div className="px-6 py-12 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-slate-900/5 dark:bg-white/10 flex items-center justify-center text-2xl">
                🔎
              </div>
              <h2 className="text-2xl font-semibold text-current">No results found</h2>
              <p className="mt-2 text-current/70">Try searching for a different movie title.</p>
            </div>
          </div>
        </section>
      )}

      {results && results.length > 0 && <Results results={results} />}
    </main>
  );
}
