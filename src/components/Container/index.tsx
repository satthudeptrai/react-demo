import { Outlet } from 'react-router';
import { useEffect } from 'react';
import './container.scss'
const Container = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Container;
