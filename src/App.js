
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const handleBgColor=(str)=>{
    document.body.style.backgroundColor=str;
    document.body.style.color="black";
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode activated","success");
    }
  }

    return (
      <>
      <Router basename="/myfirstreact">
      <Navbar mode={mode} toggleMode={toggleMode} circleChange={handleBgColor}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route 
            exact path="/" 
            element={
              <TextForm
              showAlert = {showAlert}
              heading = "Enter text below:"
              mode = {mode}
              />
            }
          />
          <Route exact path = "/about" element = {<About mode = {mode}/>}/>
        </Routes> 
      </div>
      </Router>
      </>
  );
}

export default App;
