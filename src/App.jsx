import './App.css';
import { BaseLayout } from './components/Layout/BaseLayout';
import { Note } from './components/Element';

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
