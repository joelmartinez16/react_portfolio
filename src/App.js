import React,{ useState } from "react";
import './App.css';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact"
import Resume from "./components/Resume"
function App() {
  const components =[<AboutMe/>, <Projects/>, <Contact/>]
  const [page, setPage]= useState(components[0])
  return (
    <div className="App">
      <NavBar setPage= {setPage} components = {components}/>
      {page}
    </div>
  );
}

export default App;
