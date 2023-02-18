export default function Head({ params }: any) {
  const { tag } = params;
  const title = `Tag | ${tag}`;

  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Tags page of the website" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
