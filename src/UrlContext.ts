import { Dispatch, SetStateAction, createContext } from 'react';

export interface UrlData {
  urlId: number;
  originalUrl: string;
  shortenedUrl: string;
  isCopied: boolean;
}

export interface UrlContextProps {
  resultUrl: UrlData[];
  setResultUrl: Dispatch<SetStateAction<UrlData[]>>;
}

const UrlContext = createContext<UrlContextProps>(undefined!);

export default UrlContext;
