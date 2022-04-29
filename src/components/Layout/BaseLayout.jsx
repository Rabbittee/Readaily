import clsx from 'clsx';
import { Navbar } from '../Element';

export function BaseLayout({ children }) {
  return (
    <div className={clsx('mx-auto flex h-screen w-screen')}>
      <Navbar />
      <main className="flex space-x-4">{children}</main>
    </div>
  );
}
