import { useNavigate } from 'react-router-dom';
import './styles.scss'

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div className='no-page'>
      <img src={require("../../assets/img/404.jpg")} className='imgNotFound' />
      <button className='btn-back-home' onClick={() => navigate('/')}>Return home page</button>
    </div>
  );
};
export default NoPage
