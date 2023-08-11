import Tables from "./components/Tables";
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Login from "./views/Login";
import Capacitacion from "./views/Capacitacion";
import "./App.css";
import Users from "./views/Users";
import Chat from "./components/Chat";
import Paginations from "./components/Paginations";
import Sheet from "./components/Sheet";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/tablas" exact element={<Tables />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/capacitacion" exact element={<Capacitacion />} />
        <Route path="/users" exact element={<Users />} />
        <Route path="/chat" exact element={<Chat />} />

        <Route path="/pagination" exact element={<Sheet />} />
      </Routes>
    </Layout>
  );
}

export default App;
