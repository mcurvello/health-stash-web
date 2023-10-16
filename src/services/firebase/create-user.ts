import app from '@/config/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const createUser = async (email: string, password: string) => {
  const { user } = await createUserWithEmailAndPassword(getAuth(app), email, password);
  return user;
};

