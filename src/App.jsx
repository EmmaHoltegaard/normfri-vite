import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components:
import { PageWrapper } from './styles/Common';
import { Header } from './components/header/Header';


function App() {

  return (
    <PageWrapper>
      <GlobalStyles />
      <BrowserRouter>
        <Header/>
      <Routes>
        {/* Routes goes here */}
      </Routes>
      {/* Footer goes here */}
      </BrowserRouter>
    </PageWrapper>
  )
}

export default App
