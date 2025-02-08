import Button from '../components/Button';

const SearchBar = () => {
  return (
    <section className="bg-shorten-desktop absolute -bottom-24 left-0 right-0 z-30 mx-24 flex h-48 items-center rounded-lg bg-very-dark-blue bg-cover bg-no-repeat p-16 max-sm:mx-8">
      <form
        onSubmit={() => {}}
        className="flex w-full gap-4 max-md:flex-col max-sm:p-4"
      >
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="w-full rounded-md px-4 py-4 font-sans text-xl font-semibold text-gray-neutral focus:outline-none focus:ring-2 md:w-full"
            onChange={() => {}}
          />
        </div>
        <Button variant="outline" size="rect" onClick={() => {}}>
          Shorten it!
        </Button>
      </form>
    </section>
  );
};

export default SearchBar;

/*
      <div className="bg-shorten-desktop absolute left-1/2 top-1 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 rounded-md bg-primary-dark-violet bg-cover bg-center bg-repeat p-5 shadow-lg md:flex-row md:p-20">
*/
