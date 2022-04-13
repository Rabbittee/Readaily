import clsx from 'clsx';

export function Navbar() {
  return (
    <nav
      className={clsx(
        'fixed top-0 right-0',
        'w-screen',
        'border-b border-gray-400',
        'p-2 shadow-sm'
      )}
    >
      here is navbar
    </nav>
  );
}
