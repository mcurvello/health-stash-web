import { useEffect, useState } from "react";
import { AuthContext } from '@/context/AuthContext';
import { auth } from '@/config/firebase';
import {
  User,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';

interface UserProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
  }

  const createUser = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    setUser(userCredential.user);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  const authContextValue = {
    user,
    createUser,
    logout,
    login
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};