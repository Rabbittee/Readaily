import { useArticleContext } from './ArticleElement';
import { Task } from './NoteElement';
import { useCallback, useEffect, useState } from 'react';
import useStore from 'store';
import { useModalContext } from './ModalElement';
import clsx from 'clsx';
import Icon from './Icon';

export function Note() {
  const { setVocabulary } = useArticleContext();
  const { toggleModal } = useModalContext();
  const [openNote, setOpenNote] = useState(false);

  const words = useStore(useCallback((state) => state.words, []));

  const getAllWords = useStore((state) => state.getAllWords);

  const removeWord = useStore((state) => state.removeWord);

  function onClick(word) {
    setVocabulary(word);
    toggleModal();
  }

  function toggleNote() {
    setOpenNote(!openNote);
  }

  useEffect(() => {
    void getAllWords();
  }, [getAllWords]);

  return (
    <>
      <section
        className={clsx(
          'fixed right-0 w-screen rounded-t-3xl bg-gray-light px-5 pt-10 shadow-top transition-all duration-500 md:absolute md:top-0 md:h-full md:max-w-md md:rounded-none lg:relative lg:w-full lg:max-w-lg lg:translate-x-0 lg:px-10',
          openNote
            ? 'bottom-0 md:translate-x-0'
            : 'bottom-20 translate-y-full md:bottom-auto md:translate-x-full md:translate-y-0'
        )}
      >
        <button
          className="flex md:absolute md:top-28 md:-left-3 md:h-8 md:-translate-x-[98px] md:rotate-90 md:items-center md:justify-center md:rounded-b-xl md:bg-gradient-to-l md:from-gray-light md:via-white md:to-white md:px-3 lg:hidden"
          onClick={toggleNote}
        >
          <h2 className="uppercase md:text-sm">vocabulary note</h2>
          <span className={clsx('w-8', openNote ? 'rotate-90' : '-rotate-90')}>
            <Icon.DropDown />
          </span>
        </button>

        <h2 className="pt-10 text-center uppercase md:pt-0">vocabulary note</h2>

        <ul className="my-10 space-y-4">
          {words &&
            words.map((word) => {
              return (
                <Task
                  key={word.id}
                  word={word}
                  onClick={() => onClick(word.title)}
                  onDelete={() => removeWord(word.id)}
                />
              );
            })}
        </ul>
      </section>
    </>
  );
}
