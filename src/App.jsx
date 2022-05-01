import { BaseLayout } from './components/Layout/BaseLayout';
import { Note, Article } from './components/Element';
import { makeServer } from './mock/server';
import { ArticleProvider } from './components/Element/ArticleElement';

if (process.env.NODE_ENV === '') {
  makeServer();
}

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
