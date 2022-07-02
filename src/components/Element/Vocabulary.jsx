import clsx from 'clsx';
import { Modal } from '.';
import { useArticleContext } from './ArticleElement';
import { useModalContext } from './ModalElement';
import useStore from 'store';

export function Vocabulary() {
  const { vocabulary } = useArticleContext();
  const { toggleModal } = useModalContext();

  const addWord = useStore((state) => state.addWord);

  const words = useStore((state) => state.words);

  const describe = useStore((state) => state.describe);

  const setNewWord = useStore((state) => state.setNewWord);

  function onChange(event) {
    setNewWord(event.target.value);
  }

  const updateWord = useStore((state) => state.updateWord);

  function onSubmit(event) {
    event.preventDefault();

    if (words.find((word) => word.title === vocabulary)) {
      const index = words.find((word) => word.title === vocabulary).id;

      updateWord(index, describe);
    } else {
      addWord(vocabulary, describe);
    }

    toggleModal();
  }

  return (
    <Modal>
      <div className="rounded-br-2xl rounded-tl-2xl bg-white px-8 py-5">
        <h2 className="text-center text-xl uppercase tracking-title">add to note</h2>
        <form className="mt-7 mb-2 flex w-72 flex-col space-y-3" onSubmit={onSubmit}>
          <label className="">{vocabulary}</label>
          <input
            type="text"
            name="describe"
            value={describe}
            onChange={onChange}
            className="rounded-md border px-2 py-3 text-sm"
          />
          <button
            className={clsx(
              'rounded-md',
              describe ? 'bg-gray-dark' : 'bg-gray',
              'py-3',
              'uppercase tracking-title text-white'
            )}
            disabled={!describe}
          >
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
}
