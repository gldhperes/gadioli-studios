import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import ModelDetail from './pages/ModelDetail.tsx';
import PageNotFound from './lib/PageNotFound.tsx';
import Modelos from './pages/Modelos.tsx';
import SiteStructuredData from './components/SiteStructuredData';

import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfUse from './pages/TermsOfUse.tsx';

import WhatsAppButton from './components/WhatsAppButton.tsx';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <SiteStructuredData />
      <WhatsAppButton />

      <Routes>
        {/* Add your page Route elements here */}
        <Route path="/" element={<Home />} />
        <Route path="/modelos" element={<Modelos />} />


        <Route path="/personalizados/:slug" element={<ModelDetail />} />
        
        <Route path="/modelos/:slug" element={<ModelDetail />} />

        <Route path="*" element={<PageNotFound />} />

        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />

      </Routes>
    </Router>

  )
}

export default App