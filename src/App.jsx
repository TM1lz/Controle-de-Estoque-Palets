
import Warehouse from './components/Warehouse'

function App() {
const blocoA = {
  nome: "A",
  prateleiras: [
    ["23kg", "vazio", "vazio", "vazio"],
    ["30kg", "50kg", "vazio", "vazio"],
    ["40kg", "vazio", "vazio", "vazio"]
  ]
};

  return (
    <>
      <Warehouse bloco={blocoA}></Warehouse>
    </>
  )
}

export default App
