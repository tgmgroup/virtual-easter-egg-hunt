import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='shadow-xl'>
        <div className='flex items-center justify-between h-16 layout'>
          <a href='#' className='text-3xl text-primary'>
            Virtual Egg Hunt
          </a>
          <nav className='space-x-5'>
            <a href='#' className='text-lg text-gray-800'>
              Log in
            </a>
            {/* <a href='#' className='text-lg text-gray-800'>
              Sign Up
            </a> */}
          </nav>
        </div>
      </header>

      <section id='hero'>
        <div className='flex flex-col items-center layout hero md:flex-row-reverse md:mt-0 '>
          <div className='w-full'>
            <img src='/poster.jpeg' alt='poster' className='w-full' />
          </div>
          <div className='w-full'>
            <h1 className='text-3xl md:text-5xl'>Welcome to KKI DC</h1>
            <h1 className='text-2xl md:text-4xl'>Virtual Easter Egg Hunt</h1>
            <button className='btn'>Login</button>
          </div>
        </div>
      </section>
    </>
  );
}
