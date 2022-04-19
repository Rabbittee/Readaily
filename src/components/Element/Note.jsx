import Icon from './icon';
import { useEffect, useState } from 'react';

function Button({ children, onClick }) {
  return (
    <button
      className="text-gray-600 transition-colors duration-500 hover:text-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ButtonList = ['Tierney Bricker', 'Eonline.com'];

const Vocabulary = {
  index: 1,
  title: 'Latest',
  translation: '最新的、新鮮的、新鮮、最新',
};

function Task({ vocabulary }) {
  return (
    <li className="flex justify-between py-2">
      <ul className="flex space-x-4">
        <li>
          <span>{vocabulary.index}.</span>
          <span>{vocabulary.title}</span>
        </li>
        <li>{vocabulary.translation}</li>
      </ul>
      <div className="flex space-x-4">
        <button className="relative flex border border-black p-2">
          <span className="w-5">
            <Icon.Edit />
          </span>
        </button>
        <button className="relative flex border border-black p-2">
          <span className="w-4">
            <Icon.Delete />
          </span>
        </button>
      </div>
    </li>
  );
}

function NoteList({ children }) {
  return <ul className="mt-10">{children}</ul>;
}

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
