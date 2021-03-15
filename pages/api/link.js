import db from '@/lib/firebase-admin';

export default async (_, res) => {
  const snapshot = await db.collection('tests').get();
  const tests = [];

  snapshot.forEach((doc) => {
    console.log(doc);
    tests.push({ ...doc.data() });
  });

  res.status(200).json(tests);
};
