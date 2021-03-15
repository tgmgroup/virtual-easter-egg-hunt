import { db } from './firebase-admin';

export async function getUsers() {
  const snapshot = await db.collection('users').get();
  console.log(snapshot);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
  return snapshot;
}
