import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />

      <section id='hero'>
        <div className='flex flex-col items-center layout hero md:flex-row-reverse md:mt-0 '>
          <div className='w-full mb-8'>
            <img src='/images/poster.jpeg' alt='poster' className='w-full' />
          </div>
          <div className='w-full'>
            <h1>Welcome to KKI DC</h1>
            <h2 className='mb-6'>Virtual Easter Egg Hunt</h2>
            <Link href='/auth/login'>
              <button className='text-xl btn'>Register Here!</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
