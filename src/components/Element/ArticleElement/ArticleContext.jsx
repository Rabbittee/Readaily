import { createContext, useContext, useState } from 'react';

export const ArticleContext = createContext();
export const useArticleContext = () => useContext(ArticleContext);

export function ArticleProvider({ children }) {
  const [message, setMessage] = useState('');
  const [sentence, setSentence] = useState({});
  const [wordList, setWordList] = useState([]);

  function addWord() {
    const { word } = sentence;
    const item = { title: word };

    setWordList((list) => list.concat(item));
  }

  const value = { message, setMessage, sentence, setSentence, wordList, setWordList, addWord };

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
}
