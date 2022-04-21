import clsx from 'clsx';
import { Logo, MenuIcon, Menu } from './NavbarElement';

export function Navbar() {
  return (
    <nav className={clsx('sticky top-0 left-0', 'px-3 py-6', 'text-center')}>
      <Logo />
      <MenuIcon
        state=""
        className={clsx('absolute inset-y-1/2 right-0 -translate-y-1/2 transform')}
      />
      <Menu state="" />
    </nav>
  );
}
