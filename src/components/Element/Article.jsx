import axios from 'axios';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Tip, Content } from './ArticleElement';

export function Article() {
  const [article, setArticle] = useState([]);
  const [sentence, setSentence] = useState({});
  const [position, setPosition] = useState({});
  const [link, setLink] = useState('');
  const markRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/article`)
      .then((res) => {
        setArticle(
          res.data.articles.reduce((acc, curr) =>
            curr.content.length > acc.content.length ? curr : acc
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!sentence) return;
    getTipPosition();
    setLink(translateURL());
    window.addEventListener('scroll', getTipPosition);
    window.addEventListener('pointerdown', hideTip);

    return () => {
      window.removeEventListener('scroll', getTipPosition);
      window.removeEventListener('pointerdown', hideTip);
    };
  }, [sentence]);

  function getTipPosition() {
    const { scrollY } = window;
    setPosition({
      left: markRef.current.offsetLeft,
      top: markRef.current.offsetTop - scrollY,
    });
  }

  function showTip() {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const start = range.startOffset;
    const end = range.endOffset;

    setSentence(() => {
      const text = article.content;
      const word = text.substring(start, end);
      if (!word.trim()) return false;
      return {
        prev: text.substring(0, start),
        word: word,
        next: text.substring(end, text.length),
      };
    });
  }

  function hideTip(e) {
    if (!e.target.closest('.tip')) setSentence({});
  }

  function translateURL() {
    if (!sentence.word) return;
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

  return (
    <article className={clsx('px-10')}>
      <Calendar />
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
