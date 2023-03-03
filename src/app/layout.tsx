import { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import LoadingSkeleton from './LoadingSkeleton';
import Provider from './Provider';

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'homepage of the app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Suspense fallback={<LoadingSkeleton />}>
        <body>
          <Provider>{children}</Provider>
        </body>
      </Suspense>
    </html>
  );
}
