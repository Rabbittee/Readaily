import { useArticleContext } from './ArticleElement';
import { Task } from './NoteElement';
import { STATE } from 'constants';
import { useEffect } from 'react';
import { apiGetNote } from 'api';

export function Note() {
  const { wordList, setWordList } = useArticleContext();

  function onChange(event) {
    const { name, value } = event.target;

    onUpdate({ id: Number(name), title: value, state: STATE.edit });
  }

  function onDelete(item) {
    setWordList((list) => list.filter((_item) => _item.id !== item.id));
  }

  function onUpdate(item) {
    setWordList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  async function fetchNote() {
    const res = await apiGetNote();

    const { data } = res;

    setWordList([data]);
  }

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <section className="mx-auto hidden w-full max-w-lg bg-gray-200 px-10 pt-10 lg:block">
      <h2 className="text-center uppercase">vocabulary note</h2>
      <ul className="mt-10 space-y-4">
        {wordList.map((word) => {
          return (
            <Task
              key={word.id}
              vocabulary={word}
              onChange={onChange}
              onDelete={() => onDelete(word)}
            />
          );
        })}
      </ul>
    </section>
  );
}
