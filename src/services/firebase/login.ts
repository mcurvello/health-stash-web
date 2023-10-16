import app from '@/config/firebase';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export const login = async (email: string, password: string) => {
  const { user } = await signInWithEmailAndPassword(getAuth(app), email, password);
  return user;
}

