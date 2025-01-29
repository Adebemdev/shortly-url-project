import { Navigation } from './ui/Navigation';
import { HeroSection } from './ui/HeroSection';
import Statistics from './ui/Statistics';
import SearchBar from './ui/SearchBar';
import BoostLinks from './ui/BoostLinks';
import Footer from './ui/Footer';

const App = () => {
  const navigationItems = [
    { href: '/Feature', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ];

  return (
    <main className="relative h-screen bg-White">
      <Navigation navItems={navigationItems} />
      <HeroSection />
      <SearchBar />
      <Statistics />
      <BoostLinks />
      <Footer />
    </main>
  );
};

export default App;
