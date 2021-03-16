import { getAllLinks } from '@/lib/db-admin';

export default async (_, res) => {
  try {
    const links = await getAllLinks();

    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ links });
  }
};
