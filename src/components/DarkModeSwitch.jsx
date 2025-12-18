'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div className='flex items-center'>
      {mounted &&
        (currentTheme === 'dark' ? (
          <button
            type='button'
            onClick={() => setTheme('light')}
            className='btn-ghost px-3 py-2'
            aria-label='Switch to light mode'
            title='Light mode'
          >
            <MdLightMode className='text-xl opacity-90' />
          </button>
        ) : (
          <button
            type='button'
            onClick={() => setTheme('dark')}
            className='btn-ghost px-3 py-2'
            aria-label='Switch to dark mode'
            title='Dark mode'
          >
            <MdDarkMode className='text-xl opacity-90' />
          </button>
        ))}
    </div>
  );
}
