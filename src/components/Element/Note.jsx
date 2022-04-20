import { useState } from 'react';
import { Button, Task, NoteList } from './Note';

const buttonList = ['Tierney Bricker', 'Eonline.com'];

const vocabulary = {
  index: 1,
  title: 'Latest',
  translation: '最新的、新鮮的、新鮮、最新',
};

export function Note() {
  const [list, setList] = useState([]);

  function addItem(vocabulary) {
    setList((list) => list.concat(vocabulary));
  }

  return (
    <section className="mx-auto mt-10 max-w-screen-lg px-10">
      <nav className="flex justify-between">
        <ul className="flex justify-between space-x-4 ">
          {buttonList.map((item, index) => {
            return <Button key={index}>{item}</Button>;
          })}
        </ul>
        <Button onClick={addItem(vocabulary)}>Add to Notes</Button>
      </nav>

      <NoteList>
        {list.map((item) => {
          return <Task vocabulary={item} key={item.index} />;
        })}
      </NoteList>
    </section>
  );
}
