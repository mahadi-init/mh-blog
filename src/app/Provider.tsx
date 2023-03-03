'use client';

import { ThemeProvider } from 'next-themes';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='m-auto mt-3 w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
        <Navbar />
        <div className='min-h-[78vh]'>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
