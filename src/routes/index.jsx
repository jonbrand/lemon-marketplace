import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/index';

export const RoutesComponent = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
