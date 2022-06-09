import React from 'react';
import Footer from './components/estaticos/footer/Footer'
import Navbar from './components/estaticos/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Sobre from './paginas/sobre/Sobre'
import Cadastro from './paginas/cadastro/Cadastro'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeletarTemas from './components/temas/deletartemas/DeletarTemas'
import CadastroTemas from './components/temas/cadastrotemas/CadastroTemas';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/temas" element={<ListaTemas/>}/>
          <Route path="/formularioTema" element={<CadastroTemas/>}/>
           <Route path="/formularioTema/:id" element={<CadastroTemas/>}/>
           <Route path="/deletarTema/:id" element={<DeletarTemas/>}/>
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
