import Button from '../components/Button';

const SearchBar = () => {
  return (
    <div className="bg-gray--002 relative flex items-center justify-center pb-20 lg:p-20">
      <div className="bg-ttuPattern absolute left-1/2 top-1 flex w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-md bg-primary-dark-violet bg-cover bg-center bg-repeat p-5 shadow-lg md:flex-row md:p-10">
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-full rounded-md px-4 py-4 font-sans text-xl font-semibold text-gray-neutral focus:outline-none focus:ring-2 md:w-3/4"
            onChange={() => {}}
          />
          <Button variant="outline" size="rect" onClick={() => {}}>
            Shorten it!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
