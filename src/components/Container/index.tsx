import { Outlet } from 'react-router';
import { useEffect } from 'react';
import './container.scss'
const Container = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Container;
