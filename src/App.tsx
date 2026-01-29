import AppRouter from './components/Router';
import { LanguageProvider } from './contexts/LanguageContext';
import AiBubble from './components/AiBubble';

function App() {
  return (
    <LanguageProvider>
      <AppRouter />
      <AiBubble />
    </LanguageProvider>
  );
}

export default App;
