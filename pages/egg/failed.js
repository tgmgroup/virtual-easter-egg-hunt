import Header from '@/components/Header';

export default function failed() {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center space-y-6 full-screen layout'>
        <div className='flex flex-col items-center'>
          <h2>Oh no! You lost the egg</h2>
          <h3>Someone was faster than you, Sorry!</h3>
          <h3>
            Find more!{' '}
            <i class='text-md text-gray-400'>click x button to close</i>
          </h3>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src='/images/sad.png'
            alt='egg'
            className='max-w-full w-5/8 md:w-1/4'
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
