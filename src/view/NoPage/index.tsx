import React from 'react';
import { useNavigate } from 'react-router-dom';
import {SCImgNotFound, SCLink} from './styles'

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SCImgNotFound src="/assets/img/404.jpg" />
      <SCLink onClick={() => navigate('/')}>Return home page</SCLink>
    </>
  );
};
export default NoPage
