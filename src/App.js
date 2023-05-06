import { React, Suspense, StrictMode, lazy } from 'react';

// Route librairies import
import { Routes, Route } from 'react-router-dom';


// --------Page import--------
//loader
import Loader from './pages/loaderPage/loaderPage';
import ChatPage from './pages/chatPage/ChatPage';

/* page & components with lazy load */
const NotFoundPage = lazy(() => import('./pages/notFoundPage/notFoundPage'))



function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {/* Authentification pages route */}
          <Route path='/' element={<Loader />}/>
          <Route path='/chat' element={<ChatPage/>} />

          {/* supplements pages route */}
          <Route path='loader' element={<Loader />} />
          <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </Suspense>
    </StrictMode>
  );
}

export default App;
