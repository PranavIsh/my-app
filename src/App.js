// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TestForm from "./Components/TestForm";
import Alerts from "./Components/Alerts";
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [lbltext, setlblText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    debugger;
    if (mode === "light") {
      
        setMode("dark");
        setlblText("Enable light mode");
        document.body.style.backgroundColor = "rgb(25 29 53)";

        let elements = document.getElementsByTagName("textarea");
        
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = "white";
          elements[i].style.backgroundColor = "#434343";

          showAlert("Dark mode has been applied", "success");
        }
    } else {
      defaultTheme();
      showAlert("Light mode has been applied", "success");
    }
  };

  const defaultTheme = () => {
    setMode("light");
    setlblText("Enable dark mode");
    document.body.style.backgroundColor = "white";

    let elements = document.getElementsByTagName("textarea");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "black";
      elements[i].style.backgroundColor = "white";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar
        title="FreeWeb"
        aboutUs="About Us"
        mode={mode}
        toggleMode={toggleMode}
        labelText={lbltext}
      />
      <Alerts alert={alert} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <TestForm
              heading="Enter text to analyze"
              mode={mode}
              alerts={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;
