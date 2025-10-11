import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import LoadingIntro from "./components/LoadingIntro"; // Film intro

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="App">
      {!introFinished && <LoadingIntro onFinish={() => setIntroFinished(true)} />}

      {introFinished && (
        <>
          <NavBar />
          <Banner />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
