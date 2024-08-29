import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import FSCK25 from './pages/FSCK25';
import NotFound from './pages/NotFound';
import Termine from './pages/Termine';
import Freifunk from './pages/Freifunk';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/termine" element={<Termine />} />
        <Route path="/fsck" element={<FSCK25 />} />
        <Route path="/freifunk" element={<Freifunk />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
