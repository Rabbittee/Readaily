import clsx from 'clsx';
import { Modal } from '.';
import { STATE } from 'constants';
import { useArticleContext } from './ArticleElement';
import { useModalContext } from './ModalElement';
import { useState } from 'react';

let wordId = 0;

export function Vocabulary() {
  const { vocabulary, setWordList } = useArticleContext();
  const { toggleModal } = useModalContext();
  const [value, setValue] = useState(''); //input value

  function onChange(event) {
    setValue(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();

    const item = { id: wordId++, title: vocabulary, describe: value, state: STATE.null };

    setWordList((list) => list.concat(item));
    toggleModal();
  }

  return (
    <Modal>
      <div className="rounded-br-2xl rounded-tl-2xl bg-white px-8 py-5">
        <h2 className="text-center text-xl uppercase tracking-title">add to note</h2>
        <form className="mt-7 mb-2 flex flex-col space-y-3" onSubmit={onSubmit}>
          <label>{vocabulary}</label>
          <input
            type="text"
            name="describe"
            value={value}
            onChange={onChange}
            className="w-72 rounded-md border px-2 py-3 text-sm"
          />
          <button
            className={clsx(
              'rounded-md',
              value ? 'bg-gray-dark' : 'bg-gray',
              'py-3',
              'uppercase tracking-title text-white'
            )}
            disabled={!value}
          >
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
}
