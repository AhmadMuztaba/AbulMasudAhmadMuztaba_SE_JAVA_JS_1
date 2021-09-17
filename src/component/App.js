import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'; 
import Login from './login/Login';
import Home from './home/Home';
import about from './About/About';
import Sellitems from './sellitems/Sellitems.js';
import Dashboard from './dashboard/Dashboard.js';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/about/:itemid" component={about}/>
                <Route path="/sellitems" component={Sellitems}/>
                <Route path="/dashboard" component={Dashboard}/>
            </BrowserRouter>
        );
    }
}

export default App;