import clsx from 'clsx';

export function Input({ name, className, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      id={name}
      className={clsx('w-5/6 rounded-md p-2 ', className)}
      value={value}
      onChange={onChange}
    />
  );
}
