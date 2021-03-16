import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />

      <section id='hero'>
        <div className='flex flex-col items-center layout hero md:flex-row-reverse md:mt-0 '>
          <div className='w-full mb-8'>
            <img src='/poster.jpeg' alt='poster' className='w-full' />
          </div>
          <div className='w-full'>
            <h1 className='text-3xl md:text-5xl'>Welcome to KKI DC</h1>
            <h1 className='mb-6 text-2xl md:text-4xl'>
              Virtual Easter Egg Hunt
            </h1>
            <Link href='/auth/login'>
              <button className='text-xl btn'>Register Here!</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
