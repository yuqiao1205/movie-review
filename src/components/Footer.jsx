import Link from 'next/link';
import { FaGithub, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='px-4 mt-16'>
      <div className='glass glass-border max-w-6xl mx-auto rounded-3xl'>
        <div className='px-6 py-10'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <div className='text-center md:text-left'>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-sky-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent mb-2'>
              Lauren’s Movie Review
            </h3>
            <p className='text-current/75 text-sm leading-relaxed'>
              Discover trending titles, top-rated gems, and what’s playing now — powered by TMDb.
            </p>
          </div>

          {/* Links Section */}
          <div className='text-center'>
            <h4 className='text-base font-semibold mb-4 text-current/90'>Quick Links</h4>
            <div className='flex flex-col space-y-2'>
              <Link href="/" className='text-current/75 hover:text-current transition'>
                Home
              </Link>
              <Link href="/about" className='text-current/75 hover:text-current transition'>
                About
              </Link>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-current/75 hover:text-current transition'
              >
                TMDb API
              </a>
            </div>
          </div>

          {/* Social & Credits */}
          <div className='text-center md:text-right'>
            <h4 className='text-base font-semibold mb-4 text-current/90'>Connect</h4>
            <div className='flex justify-center md:justify-end space-x-4 mb-4'>
              <a
                href="https://github.com/yuqiao1205/movie-review"
                target="_blank"
                rel="noopener noreferrer"
                className='btn-ghost px-3 py-2'
              >
                <FaGithub size={24} />
              </a>
            </div>
            <p className='text-xs text-current/60 flex items-center justify-center md:justify-end gap-1'>
              Made with <FaHeart className='text-red-500' /> by Lauren
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-slate-900/10 dark:border-white/10 mt-8 pt-4 text-center'>
          <p className='text-xs text-current/55'>
            © 2025 Lauren’s Movie Review • Data provided by TMDb
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
