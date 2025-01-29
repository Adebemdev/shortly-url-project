import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from './ui/Navigation';
import { HeroSection } from './ui/HeroSection';
import Statistics from './ui/Statistics';
import SearchBar from './ui/SearchBar';
import BoostLinks from './ui/BoostLinks';
import Footer from './ui/Footer';
import UrlProvider from './UrlProvider';

const queryClient = new QueryClient();

const App = () => {
  const navigationItems = [
    { href: '/Feature', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ];

  return (
    <main className="relative h-screen bg-White">
      <QueryClientProvider client={queryClient}>
        <UrlProvider>
          <Navigation navItems={navigationItems} />
          <HeroSection />
          <SearchBar />
          <Statistics />
          <BoostLinks />
          <Footer />
        </UrlProvider>
      </QueryClientProvider>
    </main>
  );
};

export default App;
