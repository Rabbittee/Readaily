import { useArticleContext } from './ArticleElement';
import { Task } from './NoteElement';
import { STATE } from 'constants';

export function Note() {
  const { wordList, setWordList } = useArticleContext();

  function onChange(event) {
    const { name, value } = event.target;

    onUpdate({ id: Number(name), title: value, state: STATE.edit });
  }

  function onUpdate(item) {
    setWordList((list) => list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  return (
    <section className="mx-auto w-full max-w-lg bg-gray-200 px-10 pt-10">
      <h2 className="text-center uppercase">vocabulary note</h2>
      <ul className="mt-10 space-y-4">
        {wordList.map((word) => {
          return <Task key={word.id} vocabulary={word} onChange={onChange} />;
        })}
      </ul>
    </section>
  );
}
