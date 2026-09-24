import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import ModelDetail from './pages/ModelDetail.tsx';
import PageNotFound from './lib/PageNotFound.tsx';
import Modelos from './pages/Modelos.tsx';
import SiteStructuredData from './components/SiteStructuredData';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <SiteStructuredData />

      <Routes>
        {/* Add your page Route elements here */}
        <Route path="/" element={<Home />} />
        <Route path="/modelos/" element={<Modelos />} />
        
        <Route
          path="/modelos/categoria/:categorySlug"
          element={<Modelos />}
        />

        <Route path="/modelos/:slug" element={<ModelDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>

  )
}

export default App