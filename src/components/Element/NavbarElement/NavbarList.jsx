import Icon from '../icon';

export function NavbarList() {
  return (
    <ul className="py-4">
      <li className="relative flex w-full flex-col items-center space-y-2 text-white after:absolute after:-right-3 after:block after:h-12 after:w-1 after:bg-white after:content-['']">
        <span className="h-5 w-5">
          <Icon.General />
        </span>
        <span>General</span>
      </li>
    </ul>
  );
}
