import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TypographyVariants from './pages/typography/TypographyVariants';
import ButtonVariants from './pages/button/ButtonVariants';
import MediaVariants from './pages/media/mediaVariants.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="typography" element={<TypographyVariants />} />
          <Route path="button" element={<ButtonVariants />} />
          <Route path="media" element={<MediaVariants />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
