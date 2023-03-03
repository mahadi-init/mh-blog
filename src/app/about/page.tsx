import Breadcrumb from '@/app/Breadcrumb';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page of the website',
};

export default function About() {
  return (
    <>
      <Breadcrumb items={['About']} />
      <p className='mt-3 text-3xl font-bold'>About</p>
      <p className='mt-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum,
        autem molestias quidem quasi voluptate error corrupti dignissimos ipsum
        hic illum ab, vitae iure exercitationem! Totam sit quidem voluptatem
        odio!
      </p>
      <p className='mt-3'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum fugit
        iusto maxime. Ut doloribus quidem tenetur temporibus velit maxime
        veniam.
      </p>
      <div className='flex w-full justify-center'>
        <Image
          className=''
          src='/about-img.svg'
          width={700}
          height={300}
          alt=''
        />
      </div>
      <h1 className='mb-2 font-mono text-2xl font-extrabold'>Tech Stack</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        repellendus aliquam ab velit voluptatibus? Laudantium repudiandae vero
        nesciunt dignissimos animi expedita iusto aut atque ut voluptatum? Enim
        nisi tempore perferendis?
      </p>
      <h1 className='mt-10 mb-2 font-mono text-2xl font-extrabold'>Features</h1>
      <p>Here are certain features of this site</p>
      <ul className='mt-3 list-inside list-disc space-y-3'>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Chakra UI</li>
        <li>Next SEO</li>
        <li>Next Image</li>
        <li>Next Breadcrumbs</li>
        <li>Next Sitemap</li>
        <li>Next PWA</li>
        <li>Next Offline</li>
        <li>Next Analytics</li>
        <li>Next Sentry</li>
      </ul>
      <p className='mt-5 text-xl font-bold'>Thank you for your time.</p>
    </>
  );
}
