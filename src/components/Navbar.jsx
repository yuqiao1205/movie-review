import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <nav className='px-4 mt-6'>
      <div className='glass glass-border mx-auto max-w-6xl rounded-3xl p-2 sm:p-3'>
        <div className='flex flex-wrap justify-center gap-2'>
        <NavbarItem title='Trending' param='fetchTrending' />
        <NavbarItem title='Top-Rated' param='fetchTopRated' />
        <NavbarItem title='Now Playing' param='fetchNowPlaying' />
        <NavbarItem title='Upcoming' param='fetchUpcoming' />
        </div>
      </div>
    </nav>
  );
}
