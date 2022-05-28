import { useArticleContext } from './ArticleElement';
import { Task } from './NoteElement';
import { useCallback, useEffect } from 'react';
import useStore from 'store';
import { useModalContext } from './ModalElement';

export function Note() {
  const { setWordList, setVocabulary } = useArticleContext();
  const { toggleModal } = useModalContext();

  const words = useStore(useCallback((state) => state.words, []));

  const getAllWords = useStore((state) => state.getAllWords);

  const removeWord = useStore((state) => state.removeWord);

  function onClick(word) {
    setVocabulary(word);
    toggleModal();
  }

  useEffect(() => {
    void getAllWords();
  }, [getAllWords]);

  return (
    <section className="mx-auto hidden w-full max-w-lg bg-gray-200 px-10 pt-10 lg:block">
      <h2 className="text-center uppercase">vocabulary note</h2>
      <ul className="mt-10 space-y-4">
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
  );
}
