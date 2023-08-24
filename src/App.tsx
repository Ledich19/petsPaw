import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/Page404/Page404';
import Layout from './pages/Layout/Layout';
import HelloPage from './components/HelloPage/HelloPage';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="/*" element={<HelloPage />} />
        <Route path="voting" element={<>voting</>} />
        <Route path="breeds" element={<>breeds</>} />
        <Route path="breeds/:id" element={<>breeds/:id</>} />
        <Route path="gallery" element={<>gallery</>} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
