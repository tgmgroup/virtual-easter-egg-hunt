import { useRouter } from 'next/router';
import { getAllLinks, getLinkById } from '@/lib/db-admin';
import Header from '@/components/Header';
import { eggs, eggX } from '@/data/images';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export async function getStaticProps(context) {
  const siteId = context.params.eggId;
  const link = await getLinkById(siteId);

  return {
    props: {
      link: link
    }
  };
}

export async function getStaticPaths() {
  const links = await (await getAllLinks()).links;
  const paths = links.map((link) => ({
    params: {
      eggId: link.id.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export default function GetTheEggPage({ link }) {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(eggs[Math.floor(Math.random() * eggs.length)]);
    console.log(link);
  }, []);

  const eggAvailable = (
    <>
      <h1>This egg is still available!</h1>
      <div className='flex flex-col items-center'>
        <img src={image} alt='egg' className='w-1/2 max-w-full' />
        <a
          className='text-gray-500 underline'
          href='https://www.freepik.com/vectors/design'
        >
          Designed by freepik
        </a>
      </div>
    </>
  );

  const eggNotAvailable = (
    <>
      <div className='text-center'>
        <h2>The egg has been taken by</h2>
        <h2>{link.name}</h2>
      </div>
      <div className='flex flex-col items-center '>
        <img src={eggX} alt='egg' className='w-1/2 max-w-full' />
        <div>
          Designed by{' '}
          <a
            href='https://www.flaticon.com/authors/pixel-perfect'
            title='Pixel perfect'
            className='text-gray-500 underline'
          >
            Pixel perfect
          </a>{' '}
          from{' '}
          <a
            href='https://www.flaticon.com/'
            title='Flaticon'
            className='text-gray-500 underline'
          >
            flaticon
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center space-y-6 full-screen layout'>
        {link.taken ? eggNotAvailable : eggAvailable}
        <div>
          <button
            className='text-lg btn disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={link.taken}
          >
            Get the egg!
          </button>
        </div>
      </div>
    </>
  );
}
