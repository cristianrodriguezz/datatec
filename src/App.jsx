import Tables from "./components/Tables";
import { Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Login from "./views/Login";
import Capacitacion from "./views/Capacitacion";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/tablas" exact element={<Tables />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/capacitacion" exact element={<Capacitacion />} />
        {/* <Route path="/capacitacion" exact element={<Tables />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
