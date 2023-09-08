import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { routes } from './constant/routes';
import { Layout } from './layout/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home navigate={navigate} />} />
        <Route path={routes.CATALOG} element={<Catalog />} />
        <Route path={routes.FAVORITES} element={<Favorite />} />
      </Route>
      <Route path="*" element={<Navigate to={routes.HOME} replace />} />
    </Routes>
  );
}

export default App;
