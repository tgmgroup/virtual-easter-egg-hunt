import Header from '@/components/Header';

export default function failed() {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center space-y-6 full-screen layout'>
        <div className='flex flex-col items-center'>
          <h1>Oh no! You lost the egg</h1>
          <h2>Someone was faster than you, Sorry!</h2>
          <h3>Find more!</h3>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src='/images/sad.png'
            alt='egg'
            className='max-w-full w-5/8 md:w-2/5'
          />
          <a
            className='text-gray-500 underline'
            href='https://www.freepik.com/vectors/design'
          >
            Designed by freepik
          </a>
        </div>
      </div>
    </>
  );
}
