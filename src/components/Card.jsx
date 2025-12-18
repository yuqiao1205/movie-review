// import Link from 'next/link';
// import { FiThumbsUp } from 'react-icons/fi';

// export default function Card({ result }) {
//   return (
//     <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
//       <Link href={`/movie/${result.id}`}>
//         <img
//           src={`https://image.tmdb.org/t/p/original/${
//             result.backdrop_path || result.poster_path
//           }`}
//           alt=''
//           width={500}
//           height={300}
//           className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
//         ></img>
//         <div className='p-2'>
//           <p className='line-clamp-2 text-md'>{result.overview}</p>
//           <h2 className='text-lg font-bold truncate'>
//             {result.title || result.name}
//           </h2>
//           <p className='flex items-center'>
//             {result.release_date || result.first_air_date}
//             <FiThumbsUp className='h-5 mr-1 ml-3' />
//             {result.vote_count}
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// }

import Link from 'next/link';
import { FiThumbsUp, FiStar } from 'react-icons/fi';

export default function Card({ result }) {
  const imageUrl = result.poster_path || result.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path}`
    : 'https://via.placeholder.com/500x300?text=No+Image';

  const rating = result.vote_average ? (result.vote_average / 2).toFixed(1) : 'N/A';
  const title = result.title || result.name;
  const date = result.release_date || result.first_air_date;

  return (
    <article className='group glass glass-border rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-1'>
      <Link href={`/movie/${result.id}`}>
        <div className='relative'>
          <img
            src={imageUrl}
            alt={title}
            width={320}
            height={200}
            loading='lazy'
            className='w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-[1.04]'
          />

          {/* Top badges */}
          <div className='absolute left-3 top-3 right-3 flex items-center justify-between gap-2'>
            <div className='chip bg-black/40 text-white ring-1 ring-white/10 backdrop-blur-md'>
              <FiStar className='text-yellow-300' />
              <span>{rating}/5</span>
            </div>
            {date && (
              <div className='chip bg-black/40 text-white/90 ring-1 ring-white/10 backdrop-blur-md'>
                {date}
              </div>
            )}
          </div>

          {/* Hover gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300' />

          <div className='absolute inset-x-0 bottom-0 p-4'>
            <h3 className='text-white text-lg font-bold leading-snug line-clamp-2 drop-shadow'>
              {title}
            </h3>
          </div>
        </div>
      </Link>

      <div className='p-4'>
        <p className='text-sm text-current/80 line-clamp-3 leading-relaxed'>
          {result.overview}
        </p>

        <div className='mt-4 flex items-center justify-between text-xs text-current/60'>
          <span className='inline-flex items-center gap-2'>
            <span className='h-1.5 w-1.5 rounded-full bg-sky-400/70' />
            Popularity {Math.round(result.popularity || 0)}
          </span>
          <span className='inline-flex items-center gap-1'>
            <FiThumbsUp className='h-4' />
            {result.vote_count}
          </span>
        </div>
      </div>
    </article>
  );
}
