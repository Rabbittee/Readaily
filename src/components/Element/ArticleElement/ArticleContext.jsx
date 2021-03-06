import { createContext, useContext, useState } from 'react';

export const ArticleContext = createContext();
export const useArticleContext = () => useContext(ArticleContext);

export function ArticleProvider({ children }) {
  const [message, setMessage] = useState('');
  const [sentence, setSentence] = useState({});
  const [wordList, setWordList] = useState([]);
  const [vocabulary, setVocabulary] = useState(''); //temp state to memory vocabulary in modal

  const value = {
    message,
    setMessage,
    sentence,
    setSentence,
    wordList,
    setWordList,
    vocabulary,
    setVocabulary,
  };

  return <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>;
}
