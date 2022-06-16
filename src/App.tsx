import React, { useState } from 'react';
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

import FeedPostagem from './paginas/Feed/FeedPostagem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Perfil from './paginas/perfil/Perfil';
import EditPerfil from './components/atualizarperfil/EditPerfil';
import Postagem from './models/Postagem';

function App() {
  const [posts, setPosts] = useState<Postagem[]>([])
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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/formularioTema" element={<CadastroTemas />} />
            <Route path="/formularioTema/:id" element={<CadastroTemas />} />
            <Route path="/deletarTema/:id" element={<DeletarTemas />} />
            <Route path="/formulariopostagem/:id" element={<CadastroPostagem setPosts={setPosts} posts={posts} />} />
            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
            <Route path='/feed' element={<FeedPostagem />} />
            <Route path='/atualizarusuario' element={<EditPerfil />} />
            <Route path='/perfil' element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
