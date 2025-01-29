import brandIcon from '../assets/icons/icon-brand-recognition.svg';
import detailedRecordsIcon from '../assets/icons/icon-detailed-records.svg';
import fullyCustomIcon from '../assets/icons/icon-fully-customizable.svg';
import { Title, Description, Image } from '../components/CardContents';
import ReuseableCard from '../components/ReuseableCard';

const Statistics = () => {
  return (
    <section className="bg-gray--002 px-6 pb-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center pt-12 md:pt-8">
          <div className="flex w-full items-center justify-center p-8">
            <h1 className="font-sans text-2xl font-bold text-very-dark-violet md:text-4xl">
              Advanced Statistics
            </h1>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-center text-base font-medium text-graynish-violet md:text-xl">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 py-16 sm:grid-cols-3">
          <div className="h-full w-full">
            <ReuseableCard
              content={
                <div className="absolute left-1/2 top-1 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-dark-violet p-4 md:left-[18%]">
                  <Image imageUrl={brandIcon} />
                </div>
              }
              title={
                <div>
                  <Title title="Brand Recognition" />
                </div>
              }
              descriptions={
                <div>
                  <Description descriptions="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content." />
                </div>
              }
            />
          </div>
          <div className="relative h-full w-full translate-y-[20%]">
            <ReuseableCard
              content={
                <div className="absolute left-1/2 top-1 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-dark-violet p-4 md:left-[18%]">
                  <Image imageUrl={detailedRecordsIcon} />
                </div>
              }
              title={
                <div>
                  <Title title="Detailed Records" />
                </div>
              }
              descriptions={
                <div>
                  <Description descriptions="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
                </div>
              }
            />
            <div className="absolute -inset-y-1/2 left-1/2 h-1/2 w-2 bg-primary-cyan md:left-4 md:top-1/3 md:h-2 md:w-1/4 md:-translate-x-1/2"></div>
            <div className="absolute inset-x-0 left-1/2 h-full w-2 bg-primary-cyan md:inset-x-[96%] md:top-1/3 md:h-2 md:w-1/4 md:-translate-x-1/2"></div>
          </div>
          <div className="h-full w-full translate-y-[40%]">
            <ReuseableCard
              content={
                <div className="absolute left-1/2 top-1 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-dark-violet p-4 md:left-[18%]">
                  <Image imageUrl={fullyCustomIcon} />
                </div>
              }
              title={
                <div>
                  <Title title="Fully Customizable" />
                </div>
              }
              descriptions={
                <div>
                  <Description descriptions="  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
