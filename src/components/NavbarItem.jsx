'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  const isActive = genre === param;
  return (
    <Link
      className={`group relative px-4 py-2.5 rounded-2xl text-sm font-semibold transition ${
        isActive
          ? 'text-white shadow-lg shadow-sky-500/15'
          : 'text-current/85 hover:text-current'
      }`}
      href={`/?genre=${param}`}
    >
      <span
        className={`absolute inset-0 rounded-2xl ${
          isActive
            ? ''
            : 'bg-slate-900/5 dark:bg-white/10'
        }`}
      />
      <span
        className={`absolute inset-0 rounded-2xl ${
          isActive
            ? ''
            : 'ring-1 ring-slate-900/10 dark:ring-white/10'
        }`}
      />
      {isActive && (
        <span
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage:
              'radial-gradient(110% 160% at 20% 10%, rgba(255,255,255,0.30), transparent 55%), linear-gradient(135deg, rgb(56 189 248) 0%, rgb(59 130 246) 40%, rgb(168 85 247) 100%)',
          }}
        />
      )}
      <span className="relative z-10 whitespace-nowrap">{title}</span>
    </Link>
  );
}
