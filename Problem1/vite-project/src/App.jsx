import './App.css';
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {

  return (
    <ThemeProvider>
      <div>
        <Header />
        <ThemeSwitcher />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
