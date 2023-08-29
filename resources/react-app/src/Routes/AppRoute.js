import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import About from "../pages/About/About";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import AllProjects from "../pages/AllProjects/AllProjects";

function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-detail" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoute;
