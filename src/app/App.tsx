import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import router from '@/router/router';
import store from '@/redux/store';
import '@/styles/normalize.css';
import '@/styles/variables.css';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer autoClose={2000} />
    </Provider>
  );
}
