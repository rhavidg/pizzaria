import "./App.css";
import Hamburguers from "./pages/Hamburguers/hamburguers";
import Header from "./pages/Header/header";
import Massas from "./pages/Massas/massas";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Massas />} />
          {/* <Route path="/sobre-nos" element={<About />} /> */}
          <Route path="/massas" element={<Massas />} />
          <Route path="/hamburguers" element={<Hamburguers />} />
        </Routes>
        <footer className="footer">
          <button
            type="button"
            className="btn-whatsapp"
            onClick={() => window.open("https://wa.me/3191641236")}
          >
            Peça agora no WhatsApp <WhatsAppIcon sx={{ marginLeft: "5px" }} />
          </button>
        </footer>
      </div>
    </Router>
  );
}

export default App;
