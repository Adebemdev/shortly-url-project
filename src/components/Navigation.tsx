import { useState } from 'react';
import LogoIcon from '../assets/icons/logo.svg';
import { Button } from '../ui/Button';
import MenuIcon from '../ui/MenuIcon';
import CloseIcon from '../ui/CloseIcon';
const navLinks = [
  { href: '#Feature', label: 'Features', id: 1 },
  { href: '#Pricing', label: 'Pricing', id: 2 },
  { href: '#Resources', label: 'Resources', id: 3 },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="relative mx-auto flex max-w-7xl items-center justify-between bg-white p-4 font-sans">
      <div className="flex items-center justify-start gap-4">
        <ul className="flex items-center justify-start gap-4">
          <li>
            <img src={LogoIcon} alt="" />
          </li>
        </ul>
        <div className="flex items-center justify-between gap-4">
          <nav className={isOpen ? 'open' : ''}>
            <ul className="mr-96">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {}}
                  className="m-2 cursor-pointer p-2 duration-300 lg:p-4"
                >
                  <a href={link.href} className={``}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={isOpen ? 'open' : ''}>
            <ul className="flex">
              {
                <li>
                  <Button variant="transparent">login</Button>
                </li>
              }
              {
                <li>
                  <Button variant="transparent">sign up</Button>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-start gap-4">
          {!isOpen && (
            <li>
              <MenuIcon
                className="lg:hidden"
                onClick={() => setIsOpen(false)}
              />
            </li>
          )}
          {isOpen && (
            <li>
              <CloseIcon
                className="close lg:hidden"
                onClick={() => setIsOpen(true)}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
