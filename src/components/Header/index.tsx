import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

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

      <div className="flex box">
        <h1>{title}</h1>
        <Link to={'/'} className='flex button'>+ novo registro</Link>
      </div>
    </header>
  );
};

export default Header;