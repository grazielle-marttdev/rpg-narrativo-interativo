import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TelaInicializacao } from "./componentes/TelaInicializacao";
import { MenuLoginRegistro } from "./paginas/Menu"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicializacao />} />
        <Route path="/menu" element={<MenuLoginRegistro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
