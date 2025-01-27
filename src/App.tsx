import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import Statistics from './components/Statistics';
import SearchBar from './components/SearchBar';
import BoostLinks from './components/BoostLinks';
import Footer from './components/Footer';

const App = () => {
  const navigationItems = [
    { href: '/Feature', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ];

  return (
    <div className="relative h-screen bg-White">
      <Navigation navItems={navigationItems} />
      <HeroSection />
      <SearchBar />
      <Statistics />
      <BoostLinks />
      <Footer />
    </div>
  );
};

export default App;
