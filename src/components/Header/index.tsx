import React from 'react';
import './styles.css';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const location = useLocation();
  const showSearchBox = location.pathname === '/table';

  return (
    <header id='topbar' className='flex'>
      <div className='flex box-icons'>
        <button className='material-symbols-outlined'>cottage</button>
        <button className='material-symbols-outlined'>account_circle</button>
      </div>

      <div className="flex box">
        <h1>{title}</h1>

        {showSearchBox && (
          <div id='box-search' className="flex">
            <Link to={'/'} className='flex button'>+ novo registro</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;