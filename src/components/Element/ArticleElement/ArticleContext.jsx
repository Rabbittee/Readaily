import axios from 'axios';
import { createContext, useContext, useState } from 'react';

export const ArticleContext = createContext();
export const useArticleContext = () => useContext(ArticleContext);

export function ArticleProvider({ children }) {
  const [message, setMessage] = useState('');

  async function Foo(url, method) {
    try {
      const data = await axios[method](url);
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }

  async function FetchData(url, method) {
    const [data, error] = await Foo(url, method);

    if (!error) {
      setMessage('Something wrong here, we will solve it as soon as possible.');
    }
    return data;
  }

  return (
    <ArticleContext.Provider value={{ message, setMessage, FetchData }}>
      {children}
    </ArticleContext.Provider>
  );
}
