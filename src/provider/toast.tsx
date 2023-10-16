import { ToastContext } from '@/context/toast';
import { toast, ToastOptions, ToastContainer } from 'react-toastify';

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {

  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  };
  
  const showToastSuccess = (message: string) => {
    toast.success(message, options);
  };

  const showToastError = (message: string) => {
    toast.error(message, options);
  };

  const value = {
    showToastSuccess,
    showToastError
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
