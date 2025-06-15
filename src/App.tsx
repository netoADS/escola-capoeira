import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
/*      import Aulas from './pages/Aulas/Aulas';
     import Instrumental from './pages/Instrumental/Instrumental';
     import Configuracoes from './pages/Configurações/Configurações';
     import Mensalidade from './pages/Mensalidade/Mensalidade'; */

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*              <Route path="/aulas" element={<Aulas />} />
             <Route path="/instrumental" element={<Instrumental />} />
             <Route path="/configuracoes" element={<Configuracoes />} />
             <Route path="/mensalidade" element={<Mensalidade />} /> */}
      </Routes>
    </Router>
  );
};

export default App;