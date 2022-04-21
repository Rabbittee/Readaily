import { useEffect, useState } from 'react';
import { Button, Task } from './NoteElement';

const buttonList = ['Tierney Bricker', 'Eonline.com'];

export function Note() {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);

  function addItem(voc) {
    const vocabulary = {
      index: new Date().getTime(),
      title: 'Latest',
      translation: '最新的、新鮮的、新鮮、最新',
    };

    setList((list) => list.concat(vocabulary));
  }

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((json) => setData(json.articles));
  }, []);

  return (
    <section className="mx-auto mt-10 max-w-screen-lg px-10">
      <nav className="flex justify-between">
        <ul className="flex justify-between space-x-4 ">
          {buttonList.map((item, index) => {
            return <Button key={index}>{item}</Button>;
          })}
        </ul>
        <Button onClick={addItem}>Add to Notes</Button>
      </nav>

      <ul className="mt-10">
        {list.map((item) => {
          return <Task vocabulary={item} key={item.index} />;
        })}
      </ul>
    </section>
  );
}
