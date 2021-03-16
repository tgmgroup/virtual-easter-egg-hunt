import Link from 'next/link';

export default function Header() {
  return (
    <header className='shadow-xl'>
      <div className='flex items-center justify-between h-16 layout'>
        <Link href='/'>
          <a href='#' className='text-3xl text-primary'>
            Virtual Egg Hunt
          </a>
        </Link>
        <nav className='space-x-5'>
          <Link href='/auth/login'>
            <a href='#' className='text-lg text-gray-800'>
              Log in
            </a>
          </Link>
          {/* <a href='#' className='text-lg text-gray-800'>
              Sign Up
            </a> */}
        </nav>
      </div>
    </header>
  );
}
