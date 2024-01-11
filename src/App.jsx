import ContainCharacters from "./components/ContainCharacters";
import DetailCharacter from "./components/DetailCharacter";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContainCharacters />} />
        <Route path="/status/:byStatus" element={<ContainCharacters />} />
        <Route path="/detail/:idCharacter" element={<DetailCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
