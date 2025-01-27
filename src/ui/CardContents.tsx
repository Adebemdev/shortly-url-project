// Single responsibility: Contains the comnponents for the card contents
export const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="mb-4 mt-12 font-sans text-2xl font-bold text-very-dark-violet">
      {title}
    </h2>
  );
};

export const Description = ({ descriptions }: { descriptions: string }) => {
  return (
    <p className="w-full text-center font-sans text-base font-semibold leading-[1.5] tracking-tighter text-gray-neutral md:text-left">
      {descriptions}
    </p>
  );
};

export const Image = ({ imageUrl }: { imageUrl: string }) => {
  return <img className="z-10 h-10 w-10" src={imageUrl} />;
};
