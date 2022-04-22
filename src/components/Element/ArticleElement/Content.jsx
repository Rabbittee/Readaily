import clsx from 'clsx';

export function Content({ sentence, article, markRef }) {
  const { word, prev, next } = sentence;

  return word ? (
    <>
      {prev}
      <i ref={markRef}></i>
      <span className={clsx('bg-yellow-300')}>{word}</span>
      {next}
    </>
  ) : (
    <>
      {article.content}
      <i ref={markRef}></i>
    </>
  );
}
