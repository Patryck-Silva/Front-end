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
import CadastroPostagem from './components/postagem/cadastroPostagem/CadastroPostagem'
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem'
import ListaPostagem from './components/postagem/listaPostagem/ListaPostagem';
import FeedPostagem from './paginas/Feed/FeedPostagem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AtualizarUsuario from './components/usuarios/atualizarUsuario/AtualizarUsuario';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/postagem" element={<ListaPostagem />} />
            <Route path="/formularioTema" element={<CadastroTemas />} />
            <Route path="/formularioTema/:id" element={<CadastroTemas />} />
            <Route path="/deletarTema/:id" element={<DeletarTemas />} />
            <Route path="/formulariopostagem" element={<CadastroPostagem />} />
            <Route path="/formulariopostagem/:id" element={<CadastroPostagem />} />
            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
            <Route path='/feed' element={<FeedPostagem />} />
            <Route path='/atualizarusuario' element={<AtualizarUsuario />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
