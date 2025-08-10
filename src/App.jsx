import { GlobalStyles } from "./styles/GlobalStyles";
import { Route, Routes, Navigate } from 'react-router-dom';

// Components:
import { PageWrapper } from './styles/Common';
import { Header } from './components/header/Header';
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { MinTilgang } from "./components/MinTilgang";
import { Grupper } from "./components/Grupper";
import { NotFound } from "./components/NotFound";
import { Ydelser } from "./components/Ydelser";
import { English } from "./components/English";


function App() {

  return (
    <PageWrapper>
      <GlobalStyles />
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/minTilgang" element={<MinTilgang />} />
        <Route path="/ydelser" element={<Ydelser />} />
        <Route path="/english" element={<English />} />
        <Route path="/ydelser/grupper" element={<Grupper />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
        <Footer/>
    </PageWrapper>
  )
}

export default App
