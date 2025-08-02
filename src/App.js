import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ToastNotification from './shared/ToastNotification';

function App() {
  return (
    <div className=" mx-auto">
      <ToastNotification />
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
