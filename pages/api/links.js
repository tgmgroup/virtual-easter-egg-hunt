import { getAllLinks } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async (req, res) => {
  try {
    const user = await auth.verifyIdToken(req.headers.token);
    console.log(user);
    const { links } = await getAllLinks();

    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ error });
  }
};
