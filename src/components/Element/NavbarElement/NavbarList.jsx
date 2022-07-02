import Icon from 'components/Element/Icon';
import clsx from 'clsx';
import { navbarArray } from 'constants';
import React from 'react';

export function NavbarList({ className, openMobileMenu, setMobileMenu }) {
  const activeStyle =
    'md:opacity-100 md:after:absolute md:after:-right-3 md:after:block md:after:h-12 md:after:w-1 md:after:bg-white md:after:content-[""]';

  const IconComponent = (name) => {
    const Component = Icon[name];

    return <Component />;
  };

  return (
    <div className={clsx(openMobileMenu ? 'block' : 'hidden md:block')}>
      <div className="fixed top-0 right-0 z-50 h-screen w-screen bg-gray-primary bg-opacity-50 md:hidden"></div>
      <span
        className="fixed top-2 right-2 z-50 w-8 text-white md:hidden"
        onClick={() => setMobileMenu(false)}
      >
        <Icon.Close />
      </span>
      <ul className={clsx('z-50 mb-20 space-y-10 bg-gray-primary py-4', className)}>
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
    </div>
  );
}
