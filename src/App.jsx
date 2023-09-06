// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './constant/routes';
import './App.css';
import { Layout } from './layout/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.CATALOG} element={<Catalog />} />
        <Route path={routes.FAVORITES} element={<Favorite />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.HOME} replace />} />
    </Routes>
  );
}

export default App;
