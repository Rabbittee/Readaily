import { BaseLayout } from './components/Layout/BaseLayout';
import { Note, Article } from './components/Element';
import { makeServer } from './mock/server';

if (process.env.NODE_ENV === 'mock') {
  makeServer();
}

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Article />
        <Note />
      </BaseLayout>
    </div>
  );
}

export default App;
