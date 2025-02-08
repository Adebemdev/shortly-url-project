import { navlinks } from '../constants';
import Button from './Button';

interface MobileMenuProps {
  openMenu: Boolean;
}

const MobileMenu = ({ openMenu }: MobileMenuProps) => {
  return (
    <div
      className={`${openMenu ? 'scale-100' : 'scale-0'} absolute left-0 right-0 top-32 z-50 mx-8 rounded-xl bg-very-dark-violet p-8 transition-transform duration-300`}
    >
      <ul className="text-white flex flex-col items-center justify-center gap-4 border-b-4 border-primary-cyan pb-4">
        {navlinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="hover:text-gray-700 inline-flex items-center px-1 pt-1 font-sans text-xl font-bold text-graynish-violet"
          >
            {item.label}
          </a>
        ))}
      </ul>
      <ul className="text-white flex flex-col gap-4 pt-4 text-center">
        <Button variant="secondary" size="small" onClick={() => {}}>
          Login
        </Button>
        <Button variant="primary" size="small" onClick={() => {}}>
          Sign Up
        </Button>
      </ul>
    </div>
  );
};

export default MobileMenu;
