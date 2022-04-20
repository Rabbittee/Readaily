import clsx from 'clsx';
import { Navbar } from '../Element';
export function BaseLayout({ children }) {
  return (
    <div className={clsx('mx-auto w-screen max-w-4xl xl:w-8/12', 'border border-gray-300')}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
