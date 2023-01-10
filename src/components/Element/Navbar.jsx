import clsx from 'clsx';
import { Logo, Menu, MenuIcon, NavbarList } from './NavbarElement';
import { UserMenu } from './NavbarElement/UserMenu';
import { useState } from 'react';

export function Navbar() {
  const mobileNavbarStyle =
    'absolute top-0 -left-0 min-h-screen w-1/2 pt-10 md:static md:h-auto md:w-auto md:block';
  const [openMobileMenu, setMobileMenu] = useState(false);

  return (
    <nav
      className={clsx(
        'md:min-h-screen',
        'flex justify-between md:flex-col md:justify-start',
        'md:bg-gray-primary',
        'px-3 py-6',
        'text-center'
      )}
    >
      <Logo className="hidden md:block" />
      <MenuIcon className="md:hidden" setMobileMenu={setMobileMenu} />
      <Menu />
      <NavbarList
        className={mobileNavbarStyle}
        openMobileMenu={openMobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <UserMenu className="md:flex-col" />
    </nav>
  );
}
