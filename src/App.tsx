import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './pages/Page404/Page404';
import Layout from './pages/Layout/Layout';
import HelloPage from './pages/HelloPage/HelloPage';
import Votes from './pages/VotingBody/Votes';
import Breeds from './pages/Breeds/Breeds';
import BreedInfo from './pages/BreedInfo/BreedInfo';

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="/*" element={<HelloPage />} />
        <Route path="voting" element={<Votes />} />
        <Route path="breeds" element={<Breeds />} />
        <Route path="breeds/:id" element={<BreedInfo />} />
        <Route path="gallery" element={<>gallery</>} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Route>
    </Routes>
  );
};

export default App;
