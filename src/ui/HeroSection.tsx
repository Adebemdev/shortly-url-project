import IllustationImg from '../assets/icons/illustration-working.svg';
import Button from '../components/Button';
import SearchBar from './SearchBar';

export const HeroSection = () => {
  return (
    <div className="relative pb-44 pt-12">
      <section className="flex items-center justify-around gap-8 overflow-hidden pl-24 max-xl:flex-col-reverse max-xl:pl-0">
        <div className="max-w-[640px] max-xl:flex max-xl:flex-col max-xl:items-center max-sm:px-8">
          <h1 className="font-bold leading-tight max-xl:text-center max-sm:text-5xl">
            More than just shorter links
          </h1>
          <p className="mb-8 mt-4 max-w-[560px] max-xl:text-center">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button variant="primary" size="medium" onClick={() => {}}>
            Get Started
          </Button>
        </div>
        <div className="">
          <img
            src={IllustationImg}
            alt="hero image"
            className="ml-20 w-[800px] max-xl:w-10/12 max-md:ml-10 max-md:w-full"
          />
        </div>
      </section>
      <section>
        <SearchBar />
      </section>
    </div>
  );
};

/*
<section className="overflow-hidden pb-40 lg:px-20 lg:pb-20">
      <div className="flex flex-col-reverse md:grid md:grid-cols-[auto_700px] lg:py-20">
        <div className="lg:py-10">
          <div className="flex md:flex-col md:items-start md:pl-28">
            <div className="flex max-w-[640px] flex-col items-center justify-center pt-8 md:items-start">
              <h1 className="mb-4 text-center font-sans text-5xl font-bold leading-tight text-very-dark-violet md:mb-1 md:text-left lg:text-[80px]">
                More than just shorter links
              </h1>
              <div className="mb-10 text-center md:mb-4 md:w-full md:py-4 md:text-left">
                <p className="font-sans text-xl font-semibold tracking-tight text-gray-neutral md:w-3/4">
                  Build your brand’s recognition and get detailed insights on
                  how your links are performing.
                </p>
              </div>
              <div>
                <Button variant="primary" size="medium" onClick={() => {}}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={IllustationImg}
          alt="hero image"
          className="ml-20 w-[800px] max-xl:w-10/12 max-md:ml-10 max-md:w-full"
        />
      </div>
    </section>
*/
