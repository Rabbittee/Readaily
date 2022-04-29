import clsx from 'clsx';
import { useEffect, useState } from 'react';

export function Tip({ word, position, link }) {
  const { top, left } = position;
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    console.log(wordList);
  }, [wordList]);

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
        <button onClick={() => setWordList(word)}>Add to Note</button>
      </div>
    </div>
  );
}
