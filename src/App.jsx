import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Layout from './pages/Layout';
import Profile from "./pages/Profile";
import Overview from "./pages/Overview";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Hades" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Hades/profile" element={<Profile />} />
          <Route path="/Hades/profile/syllabus" element={<Syllabus />} />
          <Route path="/Hades/overview" element={<Overview />} />
          <Route path="/Hades/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
