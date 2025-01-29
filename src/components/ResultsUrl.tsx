interface ResultsUrlProps {
  id: number;
  originalUrl: string;
  shortenedUrl: string;
  isCopied: boolean;
  handleClick: (id: number) => void;
}

const ResultsUrl = ({
  id,
  originalUrl,
  shortenedUrl,
  isCopied,
  handleClick,
}: ResultsUrlProps) => {
  return (
    <div className="bg-white mt-4 flex items-center justify-between rounded-lg p-3 shadow-lg max-lg:flex-col max-lg:items-start max-lg:gap-4">
      <div className="w-2/3 max-xl:max-w-[480px] max-lg:min-w-full max-lg:border-b max-lg:pb-2">
        <p className="text-black overflow-auto">{originalUrl}</p>
      </div>
      <div className="flex items-center gap-4 max-lg:flex-col max-lg:items-start max-md:w-full">
        <span className="text-cyan-primary">{shortenedUrl}</span>
        <button
          onClick={() => handleClick(id)}
          className={`${
            isCopied ? 'bg-very-dark-violet-neutral' : 'bg-cyan-primary'
          } text-white cursor-pointer rounded-md px-4 py-2 transition duration-300 hover:opacity-50 active:scale-95 max-md:w-full`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default ResultsUrl;
