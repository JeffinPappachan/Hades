import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Layout from './pages/Layout';
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="syllabus" element={<Syllabus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
