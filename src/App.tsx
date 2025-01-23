import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';

const App = () => {
  const navigationItems = [
    { href: '/Feature', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ];

  return (
    <div className="h-screen bg-White">
      <div>
        <Navigation navItems={navigationItems} />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
