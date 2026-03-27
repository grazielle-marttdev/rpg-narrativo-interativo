import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TelaInicializacao } from "./componentes/TelaInicializacao";
import { MenuLoginRegistro } from "./paginas/Menu";
import { TelaLogin } from "./paginas/LoginRegistro/Login";
import { TelaRegistro as Registro } from "./paginas/LoginRegistro/Registro";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicializacao />} />
        <Route path="/menu" element={<MenuLoginRegistro />} />
        <Route path="/login" element={<TelaLogin></TelaLogin>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
