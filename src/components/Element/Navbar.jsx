import clsx from 'clsx';
import { Logo, Menu, NavbarList } from './NavbarElement';

export function Navbar() {
  return (
    <nav className={clsx('h-full', 'bg-gray-primary', 'px-3 py-6', 'text-center')}>
      <Logo />
      <Menu />
      <NavbarList />
    </nav>
  );
}
