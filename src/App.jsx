import ContainCharacters from "./components/ContainCharacters";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContainCharacters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
