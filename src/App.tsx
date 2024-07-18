import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TypographyVariants from './pages/typography/TypographyVariants';
import ButtonVariants from './pages/button/ButtonVariants';
import MediaVariants from './pages/media/mediaVariants';
import CardVariants from './pages/card/CardVariants';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="typography" element={<TypographyVariants />} />
          <Route path="button" element={<ButtonVariants />} />
          <Route path="media" element={<MediaVariants />} />
          <Route path="card" element={<CardVariants />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
