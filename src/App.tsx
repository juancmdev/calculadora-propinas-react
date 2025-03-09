import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 flex">
        <h2>Menú</h2>
        <h2>Consumo</h2>
      </main>
    </>
  );
}

export default App;
