import clsx from 'clsx';
import { useArticleContext } from './ArticleContext';
import { STATE } from 'constants';
let wordId = 0;

export function Tip({ word, position, link }) {
  const { top, left } = position;
  const { sentence, setWordList } = useArticleContext();

  function addWord() {
    const { word } = sentence;
    const item = { id: wordId++, title: word, describe: '', state: STATE.null };

    setWordList((list) => list.concat(item));
  }

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
        <button onClick={addWord}>Add to Note</button>
      </div>
    </div>
  );
}
