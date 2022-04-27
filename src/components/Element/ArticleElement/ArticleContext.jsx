import { createContext, useContext, useState } from 'react';

export const ArticleContext = createContext();
export const useArticleContext = () => useContext(ArticleContext);

export function ArticleProvider({ children }) {
  const [message, setMessage] = useState('');
  const [sentence, setSentence] = useState({});

  return (
    <ArticleContext.Provider value={{ message, setMessage, sentence, setSentence }}>
      {children}
    </ArticleContext.Provider>
  );
}
