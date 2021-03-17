import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';

export default function profile() {
  const auth = useAuth();

  return (
    <>
      <Header />
      <div>profile</div>;
    </>
  );
}
