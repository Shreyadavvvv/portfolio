import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/context/ThemeContext';
import Home from '@/pages/Home';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-mono">
          404 - Not Found
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
        <Router />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
