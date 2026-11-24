import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cursos/:id" element={<CoursePage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
