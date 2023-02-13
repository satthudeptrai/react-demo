import { useRoutes } from 'react-router';
import { initRoutes } from './app-routes';
// import './styles/main.scss';
import './index.css';

function App() {
  return useRoutes(initRoutes());
}

export default App;
