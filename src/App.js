import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home Page/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientPage from './Pages/Home Page/ClientPage';
import CandidatePage from './Pages/Home Page/CandidatePage';
import ApplicationsPage from './Pages/Home Page/ApplicationsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/candidate" element={<CandidatePage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
