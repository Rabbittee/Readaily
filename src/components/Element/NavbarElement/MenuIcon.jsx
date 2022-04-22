import clsx from 'clsx';

export function MenuIcon({ state, className }) {
  const style = 'block h-1 bg-slate-300 duration-200 ease-in-out rounded-full transform';

  return (
    <div
      className={clsx(
        'menu-icon',
        'aspect-square w-12 border',
        'flex flex-col items-center justify-center',
        className
      )}
    >
      <div className={clsx('w-2/3 space-y-1 space-y-1 transition-all duration-200')}>
        <span className={clsx(style)}></span>
        <span className={clsx(style)}></span>
        <span className={clsx(style, 'ml-auto w-2/3')}></span>
      </div>
    </div>
  );
}
