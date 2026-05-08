import { Header, TabGrid, Background } from './components';
import { LanguageProvider } from './context';
import { useTabState } from './hooks';

const AppContent = () => {
  const { handleMainClick } = useTabState();

  return (
    <div className="min-h-screen flex flex-col overflow-hidden font-sans relative" onClick={handleMainClick}>
      <Background />
      <Header />
      <main className="flex-1 flex flex-col justify-end p-0 mt-10">
        <TabGrid />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;