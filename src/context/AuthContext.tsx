import React from 'react';
import { User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  createUser: (email: string, password: string) => void;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
