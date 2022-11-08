import logo from './logo.svg';
import './App.css';
import { Card } from 'flowbite-react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/allRoutes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
