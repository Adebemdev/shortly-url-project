import IllustationImg from '../assets/icons/illustration-working.svg';
import Button from '../ui/Button';
export const HeroSection = () => {
  return (
    <section className="lg:p-20">
      <div className="flex flex-col-reverse md:grid md:grid-cols-[auto_700px]">
        <div className="p-4 lg:py-10">
          <div className="flex md:flex-col md:items-start md:pl-36">
            <div className="flex flex-col items-center justify-center pt-4 md:items-start">
              <h1 className="mb-4 text-center font-sans text-5xl font-bold leading-[1.15] text-very-dark-violet md:text-left lg:text-7xl">
                <span>More than just</span>
                <br />
                <span>shorter links</span>
              </h1>
              <div className="mb-10 text-center md:mb-4 md:w-full md:py-4 md:text-left">
                <p className="font-sans text-xl font-semibold tracking-tight text-gray-neutral md:w-3/4">
                  Build your brand’s recognition and get detailed insights on
                  how your links are performing.
                </p>
              </div>
              <Button variant="primary" size="medium" onClick={() => {}}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-28 mt-10 px-4 md:m-0 md:px-0">
          <div className="">
            <img src={IllustationImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
