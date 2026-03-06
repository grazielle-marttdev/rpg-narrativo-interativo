import { TelaInicializacao } from "./componentes/TelaInicializacao"

function App() {

  return (
    <>
      <TelaInicializacao onIniciar={function (): void {
        throw new Error("Function not implemented.")
      } }></TelaInicializacao>
    </>
  )
}

export default App
