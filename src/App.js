import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Komponenter/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Andra sidor kommer senare */}
      </Routes>
    </Router>
  );
}

export default App;
