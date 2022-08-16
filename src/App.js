import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import PortfolioPage from "./pages/PortfolioPage";
import Contact from "./components/Contact";
import SinglePortfolioPage from "./pages/SinglePortfolioPage";
import ContactPage from "./pages/ContactPage";
import { useState } from "react";

function App() {
  const [showContact, setShowContact] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage setShowContact={setShowContact} />}
          ></Route>
          <Route
            path="/contact"
            element={<ContactPage setShowContact={setShowContact} />}
          ></Route>
          <Route
            path="/portfolio"
            element={<PortfolioPage setShowContact={setShowContact} />}
          ></Route>
          <Route
            path="/portfolio/:id"
            element={<SinglePortfolioPage setShowContact={setShowContact} />}
          ></Route>
        </Routes>
        {showContact && <Contact />}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
