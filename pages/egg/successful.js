import Header from '@/components/Header';

export default function successful() {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center space-y-6 full-screen layout'>
        <div className='flex flex-col items-center'>
          <h1>Congratulation</h1>
          <h2>You got the egg!</h2>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src='/images/happy.png'
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
