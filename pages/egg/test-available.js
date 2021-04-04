import { useRouter } from 'next/router';
// import { getAllLinks, getLinkById } from '@/lib/db-admin';
import { getGameConfig, getTheEgg, getLinkById } from '@/lib/db';
import Header from '@/components/Header';
import { eggs, eggX } from '@/data/images';
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';

export async function getServerSideProps(context) {
  let link = null;

  const game = await getGameConfig();

  if (game.start) {
    link = {};
  }

  return {
    props: {
      link: link
    }
  };
}

export default function GetTheEggPage({ link }) {
  const { user } = useAuth();
  const [image, setImage] = useState();
  const router = useRouter();

  useEffect(() => {
    setImage(eggs[Math.floor(Math.random() * eggs.length)]);
  }, []);

  if (!user) {
    return (
      <>
        <Header />
        <div className='flex flex-col items-center justify-center space-y-6 full-screen layout'>
          <h2>You have not logged in yet!</h2>
        </div>
      </>
    );
  }

  if (!link) {
    return (
      <>
        <Header />
        <div className='flex flex-col items-center justify-center space-y-6 full-screen layout'>
          <h2>The game has not been started</h2>
        </div>
      </>
    );
  }

  const eggAvailable = (
    <>
      <h1>This egg is still available!</h1>
      <div className='flex flex-col items-center'>
        <img src={image} alt='egg' className='img' />
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
        <img src={eggX} alt='egg' className='img' />
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
        {eggAvailable}
        <div className='flex flex-col items-center justify-center space-y-2'>
          <button className='text-lg btn disabled:opacity-50 disabled:cursor-not-allowed'>
            Get the egg!
          </button>
          <div className='space-x-3'>
            <button
              className='px-2 py-1 text-lg text-white bg-gray-600 rounded-lg'
              onClick={() => {
                router.push('/egg/successful');
              }}
            >
              Get the egg Successful!
            </button>
            <button
              className='px-2 py-1 text-lg text-white bg-gray-600 rounded-lg'
              onClick={() => {
                router.push('/egg/failed');
              }}
            >
              Get the egg Failed!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
