import './App.css';
import { BaseLayout } from './components/Layout/BaseLayout';
import { Note } from './components/Element';
import { makeServer } from './mock/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <Note />
      </BaseLayout>
    </div>
  );
}

export default App;
