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
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  const imageUrl = result.poster_path || result.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path}`
    : 'https://via.placeholder.com/500x300?text=No+Image';

  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`} className='flex justify-center'>
        <img
          src={imageUrl}
          alt=''
          width={320}
          height={200}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        />
      </Link>
      <div className='p-2'>
        <p className='line-clamp-2 text-md'>{result.overview}</p>
        <h2 className='text-lg font-bold truncate'>
          {result.title || result.name}
        </h2>
        <p className='flex items-center'>
          {result.release_date || result.first_air_date}
          <FiThumbsUp className='h-5 mr-1 ml-3' />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}

