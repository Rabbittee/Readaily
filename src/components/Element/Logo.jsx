import clsx from 'clsx';

export function Logo({ className }) {
  return (
    <a href="/" className={clsx('text-2xl uppercase tracking-widest', className)}>
      readaily
    </a>
  );
}
