import clsx from 'clsx';
import { Logo, Menu } from './NavbarElement';

export function Navbar() {
  return (
    <nav className={clsx(' h-full', 'bg-[#323232]', 'px-3 py-6', 'text-center')}>
      <Logo />
      <Menu />
    </nav>
  );
}
