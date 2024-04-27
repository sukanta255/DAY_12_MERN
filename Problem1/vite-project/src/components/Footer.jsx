import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer style={{ background: theme.background, color: theme.text }}>
      <p>Footer</p>
    </footer>
  );
};

export default Footer;
