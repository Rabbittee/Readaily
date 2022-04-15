import Icon from './icon';

function Button({ children }) {
  return (
    <button className="text-gray-600 transition-colors duration-500 hover:text-black">
      {children}
    </button>
  );
}

const ButtonList = ['Tierney Bricker', 'Eonline.com'];

function NoteList() {
  return (
    <ul className="mt-10">
      <li className="flex justify-between">
        <ul className="flex space-x-4">
          <li>
            <span>1.</span>
            <span>Latest</span>
          </li>
          <li>最新的、新鮮的、新鮮、最新</li>
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
    </ul>
  );
}

export function Note() {
  return (
    <section className="mx-auto mt-10 max-w-screen-lg px-10">
      <nav className="flex justify-between">
        <ul className="flex justify-between space-x-4 ">
          {ButtonList.map((item, index) => {
            return <Button key={index}>{item}</Button>;
          })}
        </ul>
        <Button>Add to Notes</Button>
      </nav>

      <NoteList />
    </section>
  );
}
