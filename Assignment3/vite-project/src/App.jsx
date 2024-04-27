import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DashboardPage from './components/DashboardPage';

const LazyLoadedComponent = lazy(() => import('./components/LazyLoadedComponent'));

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/lazy">Lazy Loaded Component</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/lazy" component={LazyLoadedComponent} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
