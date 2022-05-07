import { BaseLayout } from './components/Layout/BaseLayout';
import { Note, Article } from './components/Element';
import { ArticleProvider } from './components/Element/ArticleElement';

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <ArticleProvider>
          <Article />
          <Note />
        </ArticleProvider>
      </BaseLayout>
    </div>
  );
}

export default App;
