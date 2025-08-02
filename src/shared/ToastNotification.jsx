import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/toastNotification.css'

const ToastNotification = () => {
  return <ToastContainer position="top-right"
    autoClose={3000}
    hideProgressBar
    className="custom-toast-container"
    style={{ zIndex: 999999 }}
  />;
};

export default ToastNotification