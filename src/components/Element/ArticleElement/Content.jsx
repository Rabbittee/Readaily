import clsx from 'clsx';

export function Content({ sentence, article, markRef }) {
  const { word, start, end } = sentence;

  return word ? (
    <>
      {start}
      <i ref={markRef}></i>
      <span className={clsx('bg-yellow-300')}>{word}</span>
      {end}
    </>
  ) : (
    <>
      {article.content}
      <i ref={markRef}></i>
    </>
  );
}
