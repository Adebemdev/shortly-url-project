import { useState } from 'react';
import LogoIcon from '../assets/icons/logo.svg';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

interface NavLinks {
  label: string;
  href: string;
  id: number;
}

interface NavbarProps {
  navItems: NavLinks[];
}

export const Navigation = ({
  navItems = [
    { href: '/Feature', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ],
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <header className="bg-White shadow-sm">
      <div className="mx-auto max-w-7xl px-4 font-sans sm:px-6 lg:px-8">
        <div className="flex h-10 justify-between md:h-20">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center py-4">
            <div className="flex flex-shrink-0 items-center">
              <img src={LogoIcon} alt="" />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover:text-gray-700 inline-flex items-center px-1 pt-1 font-sans text-xl font-medium text-graynish-violet"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden font-sans md:flex md:items-center md:space-x-4">
            <Button variant="secondary" size="medium" onClick={() => {}}>
              Login
            </Button>
            <Button variant="primary" size="medium" onClick={() => {}}>
              Sign up
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-gray-500 hover:bg-gray-100 inline-flex items-center justify-center rounded-md p-2 text-graynish-violet"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-10 w-10" aria-hidden="true" />
              ) : (
                <Menu className="block h-10 w-10" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="m-4 flex flex-col items-center justify-center rounded-md bg-primary-dark-violet md:hidden">
          <div className="space-y-4 pb-3 pt-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block py-2 pl-3 pr-4 text-2xl font-bold text-gray-neutral"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pb-3 pt-4">
            <div className="space-y-1">
              <Button variant="secondary" size="medium" onClick={() => {}}>
                Login
              </Button>
              <Button variant="primary" size="medium" onClick={() => {}}>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
