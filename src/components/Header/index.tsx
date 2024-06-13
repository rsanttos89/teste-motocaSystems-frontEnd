import React from 'react';
import './styles.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header id='topbar' className='flex'>
      <div className='flex box-icons'>
        <button className='material-symbols-outlined'>cottage</button>
        <button className='material-symbols-outlined'>account_circle</button>
      </div>

      <h1>{title}</h1>
    </header>
  );
};

export default Header;