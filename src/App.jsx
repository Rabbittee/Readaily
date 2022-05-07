import { BaseLayout } from './components/Layout/BaseLayout';
import { Note, Article, Vocabulary } from './components/Element';
import { ArticleProvider } from './components/Element/ArticleElement';
import { ModalProvider } from './components/Element/ModalElement';

function App() {
  return (
    <div className="App">
      <BaseLayout>
        <ArticleProvider>
          <ModalProvider>
            <Vocabulary />
            <Article />
            <Note />
          </ModalProvider>
        </ArticleProvider>
      </BaseLayout>
    </div>
  );
}

export default App;
