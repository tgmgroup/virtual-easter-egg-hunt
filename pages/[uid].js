import { useRouter } from 'next/router';

export default function GetTheItemPage() {
  const router = useRouter();

  return (
    <div>
      <h3>{router.query.uid}</h3>
      <button>Get it!</button>
    </div>
  );
}
