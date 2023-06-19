import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CadastroUserPagina, CadastroProdutoPagina, LoginPagina } from "./componentes/paginas";
import Navbar from "./componentes/Navbar/Navbar.jsx";

function App() {
  return (
    <Navbar />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPagina />} />
    //     <Route path="/cadastro_usuario" element={<CadastroUserPagina />} />
    //     {/* <Route path='/dashboard/:id' element={<Dashboard/>} />
    //     <Route path='/armazem/lista_produtos' element={<Estoque />} /> */}
    //     <Route
    //       path="/armazem/cadastro_produtos"
    //       element={<CadastroProdutoPagina />}
    //     />
    //     {/* <Route path='/armazem/:id' element={<Armazem />} />
    //     <Route path='*' element={<NotFound />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
