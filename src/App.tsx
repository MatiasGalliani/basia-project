import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Praktyka from "./components/Praktyka";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/praktyka" element={<Praktyka />} />
      </Routes>
    </BrowserRouter>
  );
}
