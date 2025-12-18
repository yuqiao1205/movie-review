import Link from 'next/link';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link
      href={address}
      className='btn-ghost px-3 py-2 rounded-2xl flex items-center gap-2 text-current/90 hover:text-current transition group'
      aria-label={title}
    >
      <Icon className="text-xl opacity-90 group-hover:opacity-100 transition" />
      <p className='uppercase hidden sm:inline text-xs tracking-wide font-semibold opacity-85'>{title}</p>
    </Link>
  );
}
