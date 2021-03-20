import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className='shadow-xl'>
      <div className='flex items-center justify-between h-16 layout'>
        <Link href='/'>
          <a href='#' className='text-xl md:text-3xl text-primary'>
            Virtual Egg Hunt
          </a>
        </Link>
        <nav className='space-x-5'>
          {user ? (
            <div className='flex items-center space-x-2'>
              <Link href='/profile'>
                <p className='hidden text-xl underline cursor-pointer text-gray-800-600 md:block'>
                  {user.name}
                </p>
              </Link>
              <img
                src={user.photoUrl}
                alt={user.name}
                className='w-10 rounded-full'
              />
              {/* <Link href='/profile'>
                <button className='text-sm md:text-md btn'>Profile</button>
              </Link> */}
            </div>
          ) : (
            <Link href='/auth/login'>
              <a href='#' className='text-lg text-gray-800' className='btn'>
                Log in
              </a>
            </Link>
          )}

          {/* <a href='#' className='text-lg text-gray-800'>
              Sign Up
            </a> */}
        </nav>
      </div>
    </header>
  );
}
