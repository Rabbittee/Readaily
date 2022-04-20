import Icon from '../icon';

export function Task({ vocabulary }) {
  return (
    <li className="flex justify-between py-2">
      <ul className="flex space-x-4">
        <li>
          <span>{vocabulary.index}.</span>
          <span>{vocabulary.title}</span>
        </li>
        <li>{vocabulary.translation}</li>
      </ul>
      <div className="flex space-x-4">
        <button className="relative flex border border-black p-2">
          <span className="w-5">
            <Icon.Edit />
          </span>
        </button>
        <button className="relative flex border border-black p-2">
          <span className="w-4">
            <Icon.Delete />
          </span>
        </button>
      </div>
    </li>
  );
}
