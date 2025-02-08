export const navlinks = [
  { href: '/Feature', label: 'Features', id: 1 },
  { href: '/Pricing', label: 'Pricing', id: 2 },
  { href: '/Resources', label: 'Resources', id: 3 },
];

export interface NavLinks {
  label: string;
  href: string;
  id: number;
}

export interface NavbarProps {
  navItems: NavLinks[];
}
