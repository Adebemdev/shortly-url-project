import { Navigation } from './ui/Navigation';
import { HeroSection } from './ui/HeroSection';
import Statistics from './ui/Statistics';
// import SearchBar from './ui/SearchBar';
import BoostLinks from './ui/BoostLinks';
import Footer from './ui/Footer';
import { navlinks } from './constants';

const App = () => {
  return (
    <main className="relative h-screen bg-White font-sans">
      <Navigation navItems={navlinks} />
      <HeroSection />
      {/* <SearchBar /> */}
      <Statistics />
      <BoostLinks />
      <Footer />
    </main>
  );
};

export default App;
