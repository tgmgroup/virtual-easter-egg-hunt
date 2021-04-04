import { getGameConfig } from '@/lib/db';
import Header from '@/components/Header';
import { eggX } from '@/data/images';
import React from 'react';
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

  const eggNotAvailable = (
    <>
      <div className='text-center'>
        <h2>The egg has been taken by</h2>
        <h2>John Doe</h2>
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
        {eggNotAvailable}
        <div className='flex flex-col items-center justify-center space-y-2'>
          <button
            className='text-lg btn disabled:opacity-50 disabled:cursor-not-allowed'
            disabled='true'
          >
            Get the egg!
          </button>
        </div>
      </div>
    </>
  );
}
