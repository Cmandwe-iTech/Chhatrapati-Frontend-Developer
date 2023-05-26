import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Error } from "./pages";
import Rocketpage from "./pages/Rocketpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/rockets" element={<Rocketpage/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
