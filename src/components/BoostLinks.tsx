import Button from '../ui/Button';

const BoostLinks = () => {
  return (
    <div className="bg-ttuPattern2 w-full bg-primary-dark-violet bg-cover bg-center bg-repeat p-20 shadow-lg md:p-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 md:gap-6">
        <h2 className="text-xl font-bold text-White md:text-3xl">
          Boost your links today
        </h2>
        <div>
          <Button variant="primary" size="medium" onClick={() => {}}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoostLinks;
