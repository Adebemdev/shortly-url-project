import { NavbarProps } from '../constants';
import { Menu } from 'lucide-react';
import MobileMenu from '../components/MobileMenu';
import LogoIcon from '../assets/icons/logo.svg';
import Button from '../components/Button';
import { useState } from 'react';
export const Navigation = ({
  navItems = [
    { href: '/Features', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ],
}: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="relative px-24 py-10 max-sm:px-8">
      <nav
        className="flex items-center justify-between"
        aria-label="primary navigation"
      >
        <div className="flex items-center gap-7">
          <img src={LogoIcon} alt="" />
          <ul className="flex gap-5 max-lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-gray-700 inline-flex items-center px-1 pt-1 font-sans text-xl font-medium text-graynish-violet"
              >
                {item.label}
              </a>
            ))}
          </ul>
        </div>
        <div className="max-lg:hidden">
          <ul className="flex items-center gap-5">
            <Button variant="secondary" size="small" onClick={() => {}}>
              Login
            </Button>
            <Button variant="primary" size="small" onClick={() => {}}>
              Sign Up
            </Button>
          </ul>
        </div>
        <Menu
          onClick={() => setOpenMenu(!openMenu)}
          className="hidden cursor-pointer max-lg:block"
        />
      </nav>
      <MobileMenu openMenu={openMenu}></MobileMenu>
    </header>
  );
};

/*
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../components/Button';
import MobilHeader from '../components/MobilHeader';

export const Navigation = ({
  navItems = [
    { href: '/Features', label: 'Features', id: 1 },
    { href: '/Pricing', label: 'Pricing', id: 2 },
    { href: '/Resources', label: 'Resources', id: 3 },
  ],
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <header className="relative mx-auto max-w-[72rem] bg-secondary-red">
      <div className="bg-very-dark-blue">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <div className="flex flex-shrink-0 items-center">
              <img src={LogoIcon} alt="" />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-12">
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
            <Button variant="secondary" size="small" onClick={() => {}}>
              Login
            </Button>
            <Button variant="primary" size="small" onClick={() => {}}>
              Sign Up
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
      {/* Mobile Navigation }
      {isOpen && <MobilHeader />}
    </header>
  );
}
*/
