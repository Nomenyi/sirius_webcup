import { React, Suspense, StrictMode, lazy } from 'react';

// Route librairies import
import { Routes, Route } from 'react-router-dom';


// --------Page import--------
//loader
import Loader from './pages/loaderPage/loaderPage';

/* page & components with lazy load */
const NotFoundPage = lazy(() => import('./pages/notFoundPage/notFoundPage'))
const MainPage = lazy(() => import('./pages/mainPage/mainPage'))
const OrinixPage = lazy(() => import('./pages/onirixPage/onirixPage'))
const OrinixBotPage = lazy(() => import('./pages/chatPage/chatPage'))
const NightmarePage = lazy(() => import('./pages/nightmarePage/nightmarePage'))

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {/* Authentification pages route */}
          <Route path='/' element={<MainPage />}/>
          {/* main pages route */}
          {/* Page route */}
          <Route path='/' element={<MainPage />}/>
          <Route path='/onirix' element={<OrinixPage />}/>
          <Route path='/onirix/bot' element={<OrinixBotPage />}/>
          <Route path='/nigntmare' element={<NightmarePage />}/>

          {/* supplements pages route */}
          <Route path='loader' element={<Loader />} />
          <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </Suspense>
    </StrictMode>
  );
}

export default App;
