'use client';

import { ThemeProvider } from 'next-themes';
import Footer from './Footer';
import Navbar from './Navbar';

/**
 * create a theme provider for the app
 * @param param0 {React.ReactNode} children - The children to render inside the provider
 * @returns The provider component with the children inside it
 */
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
