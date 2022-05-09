import Icon from '../Icon';
import clsx from 'clsx';
import { navbarArray } from 'constants';

export function NavbarList({ className }) {
  const activeStyle =
    'opacity-100 after:absolute after:-right-3 after:block after:h-12 after:w-1 after:bg-white after:content-[""]';

  const IconComponent = (name) => {
    const Component = Icon[name];

    return <Component />;
  };

  return (
    <ul className={clsx('mb-20 space-y-10 bg-gray-primary py-4', className)}>
      {navbarArray.map((item) => {
        return (
          <li
            key={'nav' + item.id}
            className={clsx(
              'relative',
              'flex flex-col items-center',
              'w-full space-y-2',
              'text-white',
              'hover:cursor-pointer hover:opacity-100',
              item.active ? activeStyle : 'opacity-60'
            )}
          >
            <span className="w-6">{IconComponent(item.title)}</span>
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}
