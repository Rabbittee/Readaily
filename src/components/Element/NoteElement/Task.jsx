import Icon from '../Icon';

export function Task({ word, onClick, onDelete }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-white py-4 px-5 shadow-sm">
      <ul className="flex w-full space-x-4">
        <li className="w-1/2">
          <span>{word.title}</span>
        </li>
        <li className="w-1/2">
          <label>{word.describe}</label>
        </li>
      </ul>
      <div className="flex space-x-1">
        <button className="relative flex p-2" onClick={onClick}>
          <span className="w-4">
            <Icon.Edit />
          </span>
        </button>
        <button className="relative flex p-2" onClick={onDelete}>
          <span className="w-4">
            <Icon.Delete />
          </span>
        </button>
      </div>
    </li>
  );
}
