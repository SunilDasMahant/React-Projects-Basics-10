import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from 'react-router-dom';


const App=()=>{
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <Route  path="/contact" component={Contact}/>
          <Route  path="/service" component={Service}/>
          

          <Redirect to="/" />
        </Switch>
      
    </div>
      
  );
};

export default App;
