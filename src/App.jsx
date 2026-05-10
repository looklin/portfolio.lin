import { Header, TabGrid, Background } from './components';
import { MobileHeader, MobilePortfolio } from './components/Mobile';
import { LanguageProvider } from './context';
import { useTabState, useIsMobile } from './hooks';

const PCContent = () => {
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

const MobileContent = () => {
  return (
    <div className="min-h-screen bg-white">
      <MobileHeader />
      <MobilePortfolio />
    </div>
  );
};

const AppContent = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileContent /> : <PCContent />;
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;