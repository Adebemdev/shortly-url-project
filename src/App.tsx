import { Navigation } from './components/Navigation';

const App = () => {
  const navigationItems = [
    { href: '/Feature', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ];

  return (
    <div className="">
      <Navigation navItems={navigationItems} />
    </div>
  );
};

export default App;
