import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Posts</title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <meta name='description' content='posts page of the website' />
      <link rel='icon' href='/favicon.ico' />
      <Script
        async
        src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1725627343046661'
        crossOrigin='anonymous'
      ></Script>
    </>
  );
}
