import clsx from 'clsx';
import { Logo, Menu, MenuIcon, NavbarList } from './NavbarElement';
import { UserMenu } from './NavbarElement/UserMenu';

export function Navbar() {
  const mobileNavbarStyle =
    'absolute top-0 -left-1/2 h-screen w-1/2 pt-10 md:static md:h-auto md:w-auto md:block';
  return (
    <nav
      className={clsx(
        'md:h-full',
        'flex justify-between md:flex-col md:justify-start',
        'md:bg-gray-primary',
        'px-3 py-6',
        'text-center'
      )}
    >
      <Logo className="hidden md:block" />
      <MenuIcon className="md:hidden" />
      <Menu />
      <NavbarList className={mobileNavbarStyle} />
      <UserMenu className="md:flex-col" />
    </nav>
  );
}
