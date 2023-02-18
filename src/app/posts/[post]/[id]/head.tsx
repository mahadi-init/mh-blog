import { Convert } from '@/util/Convert';
import Script from 'next/script';

export default function Head({ params }: any) {
  const convert = new Convert();
  const { post } = params;
  const title = `${convert.slugToString(post)}`;

  return (
    <>
      <title>{title}</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='Posts page of the app' />
      <link rel='icon' href='/favicon.ico' />
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1725627343046661'
        crossOrigin='anonymous'
      ></Script>
    </>
  );
}
