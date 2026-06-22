import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PipelinePage from './pages/PipelinePage';
import ProductsPage from './pages/ProductsPage';
import SciencePage from './pages/SciencePage';
import InvestorsPage from './pages/InvestorsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pipeline" element={<PipelinePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
