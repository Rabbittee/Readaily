import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { Tip, Content, useArticleContext } from './ArticleElement';
import { maxLength } from '../../scripts';

export function Article() {
  const { FetchData, message } = useArticleContext();
  const [article, setArticle] = useState([]);
  const [sentence, setSentence] = useState({});
  const [position, setPosition] = useState({});
  const [link, setLink] = useState('');
  const markRef = useRef(null);

  function getTipPosition() {
    const { scrollY } = window;
    setPosition({
      left: markRef.current.offsetLeft,
      top: markRef.current.offsetTop - scrollY,
    });
  }

  function showTip(e) {
    e.preventDefault();
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const start = range.startOffset;
    const end = range.endOffset;
    const text = article.content;
    const word = text.substring(start, end);
    const dist = {
      prev: text.substring(0, start),
      word: word,
      next: text.substring(end, text.length),
    };
    word.trim() && setSentence(dist);
  }

  function hideTip(e) {
    !e.target.closest('.Tip') && setSentence({});
  }

  function translateURL() {
    if (sentence.word) {
      const url = 'https://translate.google.com.tw';
      const search = {
        hl: 'zh-TW',
        tab: 'rT',
        sl: 'en',
        tl: 'zh-TW',
        text: sentence.word.trim(),
        op: 'translate',
      };
      const result = `${url}/?` + new URLSearchParams({ ...search });
      return result.toString().split('+').join('%20');
    }
  }

  async function fetchArticle() {
    const data = await FetchData(`${process.env.REACT_APP_URL}/api/article`, 'get');
    setArticle(maxLength(data.data.articles));
  }

  useEffect(() => {
    fetchArticle();
  }, []);

  useEffect(() => {
    if (sentence && article) {
      getTipPosition();
      setLink(translateURL());
      window.addEventListener('scroll', getTipPosition);
      window.addEventListener('pointerdown', hideTip);
    }

    return () => {
      window.removeEventListener('scroll', getTipPosition);
      window.removeEventListener('pointerdown', hideTip);
    };
  }, [sentence]);

  if (!article) {
    return <article className={clsx('p-10 text-center text-red-700')}>{message}</article>;
  }

  return (
    <article className={clsx('px-10')}>
      <img src={article.imageUrl} alt="" />
      <h1 className={clsx('mt-8 font-serif text-3xl font-medium leading-normal')}>
        {article.title}
      </h1>
      <div onPointerUp={showTip} onPointerDown={hideTip}>
        <Content sentence={sentence} article={article} markRef={markRef} />
      </div>
      <Tip word={sentence.word} position={position} link={link} />
    </article>
  );
}
