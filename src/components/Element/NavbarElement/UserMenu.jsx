import Icon from '../Icon';
import clsx from 'clsx';

export function UserMenu({ className }) {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <span className="hidden h-0.5 w-6 bg-white bg-opacity-60 md:block"></span>
      <ul className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 md:py-12">
        <li className="flex hover:cursor-pointer">
          <span className="w-6 md:text-white">
            <Icon.Book />
          </span>
        </li>
        <li className="flex hover:cursor-pointer">
          <span className="w-6 md:text-white">
            <Icon.Clipboard />
          </span>
        </li>
        <li className="flex hover:cursor-pointer">
          <span className="w-6 md:text-white">
            <Icon.User />
          </span>
        </li>
      </ul>
    </div>
  );
}
