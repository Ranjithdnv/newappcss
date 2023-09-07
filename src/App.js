import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { CountContext } from "./context";
import terms from "./components/terms";
import Create from "./components/create";
import Login from "./components/login";
import Signup from "./components/signup";
import Post from "./components/post";
import Messagechat from "./components/messagechat";
import Contact from "./components/contact";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
function App() {
  const Contexts = useContext(CountContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Contexts.us.username ? <Home /> : <Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/messagechat" element={<Messagechat />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatwithpost" element={<Post />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
