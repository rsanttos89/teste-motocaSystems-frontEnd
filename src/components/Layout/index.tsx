import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import './styles.css';

const Layout: React.FC = () => {
  const location = useLocation();
  
  const getTitle = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Registro de Motos';

      case '/motorcycle_table':
        return 'Tabela de Motos';

      default:
        return 'Motoca';
    }
  };

  return (
    <div className="layout">
      <div className="main-content">
        <Header title={getTitle(location.pathname)} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;