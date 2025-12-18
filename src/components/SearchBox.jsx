'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search/${search}`);
    }
  };
  return (
    <form
      className='px-4 mt-6'
      onSubmit={handleSubmit}
    >
      <div className='glass glass-border max-w-3xl mx-auto rounded-3xl p-2 sm:p-3 flex items-center gap-2'>
        <div className='relative flex-1'>
          <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-current/70' />
          <input
            type='text'
            placeholder='Search movies, actors, directors…'
            className='input pl-11 pr-4'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='btn-primary px-5'
          disabled={!search.trim()}
        >
          Search
        </button>
      </div>
    </form>
  );
}
