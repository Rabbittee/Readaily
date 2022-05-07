import { STATE } from 'constants';
import Icon from '../Icon';
import { Input } from './Input';

export function Task({ vocabulary, onChange }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-white py-4 px-5 shadow-sm">
      <ul className="flex space-x-4">
        <li>
          <span>{vocabulary.title}</span>
        </li>
        <li>
          {vocabulary.state === STATE.edit ? (
            <Input name={vocabulary.title} value={vocabulary.describe} onChange={onChange} />
          ) : (
            <label>{vocabulary.describe}</label>
          )}
        </li>
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
