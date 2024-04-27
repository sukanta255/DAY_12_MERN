import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Main = () => {
  const { theme } = useTheme();

  return (
    <main style={{ background: theme.background, color: theme.text }}>
      <p>Main Content</p>
    </main>
  );
};

export default Main;
