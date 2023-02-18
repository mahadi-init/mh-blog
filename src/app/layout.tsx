import { Suspense } from 'react';
import './globals.css';
import LoadingSkeleton from './LoadingSkeleton';
import Provider from './Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <Suspense fallback={<LoadingSkeleton />}>
        <body>
          <Provider>{children}</Provider>
        </body>
      </Suspense>
    </html>
  );
}
