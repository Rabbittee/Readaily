import { useEffect, useState } from 'react';
import { Button, Task, NoteList } from './Note';

const ButtonList = ['Tierney Bricker', 'Eonline.com'];

const Vocabulary = {
  index: 1,
  title: 'Latest',
  translation: '最新的、新鮮的、新鮮、最新',
};

export function Note() {
  const [list, setList] = useState([]);

  function addItem() {
    setList((list) => list.concat(Vocabulary));
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <section className="mx-auto mt-10 max-w-screen-lg px-10">
      <nav className="flex justify-between">
        <ul className="flex justify-between space-x-4 ">
          {ButtonList.map((item, index) => {
            return <Button key={index}>{item}</Button>;
          })}
        </ul>
        <Button onClick={addItem}>Add to Notes</Button>
      </nav>

      <NoteList>
        {list.map((item, key) => {
          return <Task vocabulary={item} key={key} />;
        })}
      </NoteList>
    </section>
  );
}
