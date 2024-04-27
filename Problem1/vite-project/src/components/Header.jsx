import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header style={{ background: theme.background, color: theme.text }}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
