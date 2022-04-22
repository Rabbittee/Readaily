import clsx from 'clsx';

export function Tip({ word, position, link }) {
  const { top, left } = position;

  return word ? (
    <div
      className={clsx('Tip fixed max-w-sm -translate-y-full transform bg-slate-200 p-5')}
      style={{ left: left, top: top }}
    >
      {word}
      <div className={clsx('flex space-x-3')}>
        <a href={link} target="_blank" rel="noreferrer noopener">
          Translate Link
        </a>
        <a href="/" target="_blank">
          Add to Note
        </a>
      </div>
    </div>
  ) : (
    <></>
  );
}
