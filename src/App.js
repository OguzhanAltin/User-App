import React, { Component } from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import Users from "./components/Users";
import AddUser from "./forms/AddUser";
import UpdateUser from "./forms/UpdateUser";
import NotFound from "./pages/NotFound";
import Contribute from "./pages/Contribute";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

class App extends Component {

  render() {

   return (
    <Router>
      <div className="container">
      <Navbar title="Mavzy App"/>
        <hr/>

        <Switch>
        <Route exact path = "/" component = {Users}/>
        <Route exact path = "/add" component = {AddUser}/>
        <Route exact path = "/github" component = {Contribute}/>
        <Route exact path = "/update/:id" component = {UpdateUser}/>
        <Route component = {NotFound}/>
        </Switch>
        


      </div>
    </Router>
    

   );

 }

}

export default App;
