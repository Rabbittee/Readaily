import clsx from 'clsx';
import { Navbar } from 'components/Element';

export function BaseLayout({ children }) {
  return (
    <div className={clsx('mx-auto flex min-h-screen flex-col md:flex-row')}>
      <Navbar />
      <main className="relative flex md:overflow-hidden lg:space-x-4">{children}</main>
    </div>
  );
}
