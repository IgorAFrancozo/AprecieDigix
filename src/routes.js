import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import token from './data/token.json';
import CadastroColaboradores from './pages/CadastroColaboradores';
import ListagemColaboradoresCadastrados from './pages/ListagemColaboradoresCadastrados';
import NotFound from './pages/NotFound';
import Menu from './componente/Menu';
import Footer from './componente/Footer';
import Cabecalho from './componente/Cabecalho';

export default function AprecieRouter() {
  return (
    <Router>
      <Cabecalho/>
      <Menu />
      <Routes>
        <Route path="/" element={<ListagemColaboradoresCadastrados />} />
        <Route path="/cadastro" element={<CadastroColaboradores token={token} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}