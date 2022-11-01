// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
