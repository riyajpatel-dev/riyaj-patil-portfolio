import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Css/index.css";
import Headers from "./Component/Headers";
import Navbar from "./Component/Navbar";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Services from "./Component/Services";
import CTA from "./Component/CTA";
import Footer from "./Component/Footer";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Headers />
    <Skills />
    <Project />
    <Services />
    <CTA />
    <Footer />
  </>,
);
