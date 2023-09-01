import logo from './logo.svg';
import './App.css';
import terms from "./components/terms"
import Create from "./components/create"
import Login from "./components/login"
import Signup from "./components/signup"
import Post from "./components/post"
import Messagechat from "./components/messagechat"
import Contact from "./components/contact"
import Home from "./components/home"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <Routes>
        <Route
          path="/"
          element={<Home /> }
        />
          <Route
          path="/create"
          element={<Create /> }
        />
          <Route
          path="/messagechat"
          element={<Messagechat /> }
        />
         <Route
          path="/signup"
          element={<Signup /> }
        />
          <Route
          path="/chatwithpost"
          element={<Post /> }
        />
        <Route path="/login" element={<Login  />} />
      </Routes>
    </div>
  );
}

export default App;
