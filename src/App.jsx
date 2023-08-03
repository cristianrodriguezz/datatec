import Tables from "./components/Tables";
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Login from "./views/Login";
import Capacitacion from "./views/Capacitacion";
import './App.css'
import Users from "./views/Users";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/tablas" exact element={<Tables />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/capacitacion" exact element={<Capacitacion />} />
        <Route path="/users" exact element={<Users />} />
      </Routes>
    </Layout>
  );
}

export default App;
