import { useState } from "react";
import Header from "./componentes/header/index.jsx";
import "./App.css";
import Hero from "./componentes/hero/index.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
