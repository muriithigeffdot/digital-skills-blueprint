import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useContent = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useContent must be used within an AppProvider');
  }
  return context;
};