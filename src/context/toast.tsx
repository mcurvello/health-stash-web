import { createContext } from 'react';

export interface ToastContextType {
  showToastSuccess: (message: string) => void;
  showToastError: (message: string) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);
