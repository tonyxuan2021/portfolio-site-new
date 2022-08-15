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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/portfolio/:id" element={<SinglePortfolioPage />}></Route>
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
