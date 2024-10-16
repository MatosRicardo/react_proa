import "./App.css";
import Header from "./components/Header";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";
import Menu3 from "./components/Menu3";
import Menu4 from "./components/Menu4";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <body>
        <Router>
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Menu1 />} /> {/* Página inicial */}
              <Route path="/menu2" element={<Menu2 />} /> {/* Página Menu2 */}
              <Route path="/menu3" element={<Menu3 />} /> {/* Página Menu3 */}
              <Route path="/menu4" element={<Menu4 />} /> {/* Página Menu4 */}
            </Routes>
            <Footer />
          </main>
        </Router>
      </body>
    </>
  );
}

export default App;
