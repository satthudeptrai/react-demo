import { useNavigate } from 'react-router-dom';
import './styles.scss'

const ServerError = () => {
  const navigate = useNavigate();
  return (
    <div className='error-page'>
      <img src={require("../../assets/img/500.jpg")} className='imgError' />
      <button className='btn-back-home' onClick={() => navigate('/')}>Return home page</button>
    </div>
  );
};
export default ServerError
