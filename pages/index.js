import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';

export default function Home() {
  const auth = useAuth();
  return (
    <>
      <Header />

      <section id='hero'>
        <div className='flex flex-col items-center justify-center layout hero full-screen md:flex-row-reverse'>
          <div className='w-full mb-8'>
            <img src='/images/poster.jpeg' alt='poster' className='w-full' />
          </div>
          <div className='w-full'>
            <h1>Welcome to KKI DC</h1>
            <h2 className='mb-6'>Virtual Easter Egg Hunt</h2>

            {auth.user ? (
              <Link href='/leaderboard'>
                <button className='text-xl btn'>Leaderboard</button>
              </Link>
            ) : (
              <Link href='/auth/login'>
                <button className='text-xl btn'>Register Here!</button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
