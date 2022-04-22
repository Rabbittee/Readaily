import { BaseLayout } from './components/Layout/BaseLayout';
import { Note, Article } from './components/Element';

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
