import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./pages/Home/Home'))
const LazyProfile = lazy(() => import('./pages/Profile/Profile'))
const LazyList = lazy(() => import('./pages/List/List'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/perfil" element={<LazyProfile />} />
          <Route path="/lista" element={<LazyList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>

  );
};

export default App
