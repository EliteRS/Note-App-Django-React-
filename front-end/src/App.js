import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//use Hashrouter to avoid hard refresh
import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
            {/* <Route path="/" component={<NotesListPage />} />
          <Route path="/note/:id" component={<NotePage />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
