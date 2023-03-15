import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Peas } from './pages';
import AppRoutes from './AppRoutes';
import { StrictMode } from 'react';

function App() {
  return (
    <StrictMode>
      <Peas />
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
    </StrictMode>
  );
}

export default App;