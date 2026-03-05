import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";
import FeedbackPage from "./pages/FeedbackPage";
import FeedbackListPage from "./pages/FeedbackList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="/feedbacks" element={<FeedbackListPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;