import clsx from 'clsx';
import { useModalContext } from '../ModalElement';
import { useArticleContext } from '.';

export function Tip({ word, position, link }) {
  const { top, left } = position;

  const { toggleModal } = useModalContext();

  const { setVocabulary } = useArticleContext();

  const addNote = () => {
    setVocabulary(word);
    toggleModal();
  };

  return !word ? null : (
    <div
      className={clsx('Tip fixed max-w-sm -translate-y-full transform bg-slate-200 p-5')}
      style={{ left: left, top: top }}
    >
      {word}
      <div className={clsx('flex space-x-3')}>
        <a href={link} target="_blank" rel="noreferrer noopener">
          Translate Link
        </a>
        <button onClick={addNote}>Add to Note</button>
      </div>
    </div>
  );
}
