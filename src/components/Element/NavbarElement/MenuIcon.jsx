import clsx from 'clsx';

export function MenuIcon({ className }) {
  const style = 'block h-0.5 bg-slate-300 duration-200 ease-in-out rounded-full transform';

  return (
    <div
      className={clsx(
        'menu-icon',
        'aspect-square w-12 border bg-black',
        'flex flex-col items-center justify-center',
        className
      )}
    >
      <div className={clsx('w-1/2 space-y-2 transition-all duration-200')}>
        <span className={clsx(style)}></span>
        <span className={clsx(style)}></span>
        <span className={clsx(style)}></span>
      </div>
    </div>
  );
}
