import React from 'react';
import './styles.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header id="topbar" className="flex">
      <h1>{title}</h1>
    </header>
  );
};

export default Header;