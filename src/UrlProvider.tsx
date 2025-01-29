import { ReactNode, useState } from 'react';
import UrlContext, { UrlData, UrlContextProps } from './UrlContext';

interface UrlProviderProps {
  children: ReactNode;
}

const UrlProvider = ({ children }: UrlProviderProps) => {
  const storedData = localStorage.getItem('shorteneUrlData');

  let data;
  if (storedData !== null) {
    try {
      data = JSON.parse(storedData);
    } catch (error) {
      console.error('Invalid JSON:', storedData);
    }
  }

  const [resultUrl, setResultUrl] = useState<UrlData[]>(data || []);

  const contextValue: UrlContextProps = {
    resultUrl: resultUrl,
    setResultUrl: setResultUrl,
  };

  return (
    <UrlContext.Provider value={contextValue}>{children}</UrlContext.Provider>
  );
};

export default UrlProvider;
