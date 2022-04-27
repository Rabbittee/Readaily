import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import { Tip, Content, useArticleContext } from './ArticleElement';
import { maxLength, Selection, TranslateUrl } from '../../scripts';

export function Article() {
  const { fetchData, message, sentence, setSentence } = useArticleContext();
  const [article, setArticle] = useState([]);
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
    setSentence(new Selection(article.content));
  }

  function hideTip(e) {
    !e.target.closest('.Tip') && setSentence({});
  }

  function translateURL() {
    if (sentence.word) {
      const translation = new TranslateUrl(sentence.word);
      setLink(translation.link);
    }
  }

  async function fetchArticle() {
    const {
      data: { articles },
    } = await fetchData(`${process.env.REACT_APP_URL}/api/article`, 'get');
    setArticle(maxLength(articles));
  }

  useEffect(() => {
    fetchArticle();
  }, []);

  useEffect(() => {
    if (!message && sentence) {
      getTipPosition();
      translateURL();
      window.addEventListener('scroll', getTipPosition);
      window.addEventListener('pointerdown', hideTip);
    }

    return () => {
      window.removeEventListener('scroll', getTipPosition);
      window.removeEventListener('pointerdown', hideTip);
    };
  }, [sentence, message]);

  return message ? (
    <article className={clsx('p-10 text-center text-red-700')}>{message}</article>
  ) : (
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
