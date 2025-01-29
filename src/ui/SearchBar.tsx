import Button from '../components/Button';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import UrlContext from '../UrlContext';
import { useState, FormEvent, useEffect, useContext } from 'react';

interface SearchBarProps {}
interface Params {
  url: string;
}

const SearchBar = ({}: SearchBarProps) => {
  const { resultUrl, setResultUrl } = useContext(UrlContext);
  const [url, setUrl] = useState<string>('');

  const mutation = useMutation({
    mutationFn: async (params: Params) => {
      return await axios.post(
        'https://url-shortening-api-proxy.vercel.app/api/proxy',
        params,
      );
    },
  });

  useEffect(() => {
    if (mutation.data?.data.result_url !== undefined) {
      setResultUrl((prevValue) => [
        ...prevValue,
        {
          urlId: Date.now(),
          originalUrl: url,
          shortenedUrl: mutation.data?.data.result_url,
          isCopied: false,
        },
      ]);
      setUrl('');
    }
  }, [mutation.data?.data.result_url]);

  useEffect(() => {
    if (resultUrl.length !== 0) {
      const data = resultUrl.map((element) => ({
        urlId: element.urlId,
        originalUrl: element.originalUrl,
        shortenedUrl: element.shortenedUrl,
      }));
      localStorage.setItem('shorteneUrlData', JSON.stringify(data));
    }
  }, [resultUrl]);

  function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    mutation.mutate({
      url,
    });
  }

  return (
    <div className="bg-gray--002 relative flex items-center justify-center pb-20 lg:p-20">
      <div className="bg-ttuPattern absolute left-1/2 top-1 flex w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-md bg-primary-dark-violet bg-cover bg-center bg-repeat p-5 shadow-lg md:flex-row md:p-20">
        <form
          onSubmit={handleSubmit}
          className="flex w-full gap-4 max-md:flex-col max-sm:p-4"
        >
          <div className="flex w-full flex-col gap-4 bg-secondary-red md:flex-row md:gap-6">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="w-full rounded-md px-4 py-4 font-sans text-xl font-semibold text-gray-neutral focus:outline-none focus:ring-2 md:w-full"
              value={url}
              onChange={handleUrlChange}
            />
            {mutation.isSuccess ? (
              <div className="text-cyan-primary">
                A short link has been added
              </div>
            ) : null}
          </div>
          <Button variant="outline" size="rect" onClick={() => {}}>
            Shorten it!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
