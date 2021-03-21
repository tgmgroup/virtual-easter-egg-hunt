import Header from '@/components/Header';
import { useRouter } from 'next/router';

export default function ImagePage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center space-y-6 full-screen layout'>
        <img
          src={`/images/info/${router.query.imageFile}.jpg`}
          alt='egg'
          className='max-w-full w-5/8 md:w-1/3'
        />
      </div>
    </>
  );
}
