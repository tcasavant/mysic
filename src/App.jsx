import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MyCollectionPage from "./Pages/MyCollectionPage.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import Layout from "./Layout.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MyCollectionPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
