import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <Navbar />
          <Switch>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;