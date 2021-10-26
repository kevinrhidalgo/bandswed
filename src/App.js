import React from "react"
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Main from "./components/Main"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Nav/Nav"


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
<Nav/>
        <Route path='/' exact={true} component={Main}/>   
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
