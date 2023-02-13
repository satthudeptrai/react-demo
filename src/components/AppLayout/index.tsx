import { Outlet } from 'react-router';
import { useEffect } from 'react';
import MenuLeft from '../MenuLeft';
import Container from '../Container';
import './appLayout.scss'
import { Button } from 'react-bootstrap';

const AppLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="app-layout">
      <div id="menu-left">
        <MenuLeft />
      </div>
      <div id="container">
        <Container />
      </div>
    </div>
  );
};

export default AppLayout;
