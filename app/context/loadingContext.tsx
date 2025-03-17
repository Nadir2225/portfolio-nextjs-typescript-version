// LoadingContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Loading from '../components/loading';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType>({ 
  isLoading: true, 
  setIsLoading: () => {} 
});

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // When this effect runs, hydration has completed
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading ? <Loading /> : (
        children
      )}
    </LoadingContext.Provider>
  );
}

export const useLoading = (): LoadingContextType => useContext(LoadingContext);