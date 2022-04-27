import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export const ArticleContext = createContext();
export const useArticleContext = () => useContext(ArticleContext);

export function ArticleProvider({ children }) {
  const [message, setMessage] = useState('');
  const [sentence, setSentence] = useState({});

  async function checkData(url, method) {
    try {
      const data = await axios[method](url);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }

  async function fetchData(url, method) {
    const [data, error] = await checkData(url, method);

    if (error) {
      setMessage('Something wrong here, we will solve it as soon as possible.');
      return;
    }

    return data;
  }

  return (
    <ArticleContext.Provider value={{ message, setMessage, sentence, setSentence, fetchData }}>
      {children}
    </ArticleContext.Provider>
  );
}
