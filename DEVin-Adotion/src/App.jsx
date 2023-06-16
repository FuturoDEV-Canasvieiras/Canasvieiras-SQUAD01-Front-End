import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import { CadastroPagina} from './componentes/paginas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/cadastro_usuario' element={<CadastroPagina />} />
        {/* <Route path='/dashboard/:id' element={<Dashboard /> } />
        <Route path='/armazem/lista_produtos' element={<Estoque />} />
        <Route path='/armazem/cadastro_produtos' element={<EstoqueCadastroPage />} />
        <Route path='/armazem/:id' element={<Armazem />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
