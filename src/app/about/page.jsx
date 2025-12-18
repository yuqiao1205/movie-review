export default function About() {
  return (
    <main className='min-h-screen pb-10'>
      <section className='px-4 mt-8'>
        <div className='glass glass-border max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden'>
          <div className='px-6 py-12 sm:px-10'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent'>
                About
              </h1>
              <p className='mt-4 text-base sm:text-lg text-current/75 max-w-2xl mx-auto leading-relaxed'>
                A modern, fast movie discovery experience — built with Next.js and powered by TMDb.
              </p>
            </div>

            <div className='mt-10 grid md:grid-cols-2 gap-6'>
              <div className='glass glass-border rounded-3xl p-6'>
                <h2 className='text-xl font-semibold text-current'>Our Mission</h2>
                <p className='mt-3 text-current/75 leading-relaxed'>
                  Help you discover great movies quickly with clean UI, smart browsing, and a delightful viewing experience.
                </p>
              </div>

              <div className='glass glass-border rounded-3xl p-6'>
                <h2 className='text-xl font-semibold text-current'>What You’ll Find</h2>
                <p className='mt-3 text-current/75 leading-relaxed'>
                  Trending picks, top-rated classics, upcoming releases, and what’s in theaters now — plus search that gets you to the details fast.
                </p>
              </div>
            </div>

            <div className='mt-6 glass glass-border rounded-3xl p-6 text-center'>
              <h2 className='text-xl font-semibold text-current'>Credits</h2>
              <p className='mt-3 text-current/75 leading-relaxed max-w-2xl mx-auto'>
                This product uses the TMDb API but is not endorsed or certified by TMDb.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}