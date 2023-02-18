'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='cursor-pointer'>
      {currentTheme === 'dark' ? (
        <BsSunFill onClick={() => setTheme('light')} />
      ) : (
        <BsMoonFill onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}
