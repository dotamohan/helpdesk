import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import Login from './login/Login';
import Home from './Home/home';
import Tickets from './Home/tickets';
import Openticketsedit from './Home/Openticketsedit'
import Profile from './Home/profile'
import new_ticket from './Home/new_ticket';
import EditTickets from './Home/edit_ticket';
import home_2 from './Home/home_2';
import timesheet from './project/timesheet';
import Project from './Home/Project';
import Email from './Home/Email';
import ProjectDetails from './Home/ProjectDetails';
import footer from './Home/footer';
import Issus from './Home/Issus';
import createproject from './Home/createproject';
import board from './Home/board';
import boardmembers from './Home/boardmembers';
import sprint from './Home/sprint';
import backloglist from './Home/backloglist';
import sprintdetails from './Home/sprintdetails';
import burnchart from './Home/burnchart';
import app from './App'
import Table from './Home/Table';
import Sprintfun from './function components/sprint';
import createtable from './Home/createtable';

const routing = (  
  <Router>  
    <div>  
      {/* <Route path='/app' component={app} /> */}
      <Route exact path='/' component={Login} />
      <Route path="/login" component={Login} />  
      {/* <Route path="/home" component={Home} />   */}
      <Route path="/tickets" component={Tickets} />  
      <Route path="/Openticketsedit" component={Openticketsedit} />  
      <Route path="/profile" component={Profile} />  
      <Route path="/NewTickets" component={new_ticket} />  
      <Route path="/EditTickets" component={EditTickets} />  
      <Route path="/home" component={home_2} /> 
      <Route path="/timesheet" component={timesheet} /> 
      <Route path="/project" component={Project} /> 
      <Route path="/email" component={Email} /> 
      <Route path="/projectdetails" component={ProjectDetails} /> 
      <Route path="/test" component={Home} /> 
      <Route path="/footer" component={footer} /> 
      <Route path="/issus" component={Issus} /> 
      <Route path="/createproject" component={createproject} /> 
      <Route path="/board" component={board} /> 
      <Route path="/boardmembers" component={boardmembers} /> 
      <Route path="/sprint" component={sprint} />
      <Route path="/backloglist" component={backloglist} />
      <Route path="/sprintdetails" component={sprintdetails} />
      <Route path="/burnchart" component={burnchart} />
      <Route path="/table" component={Table} />
      <Route path="/Sprint-function" component={Sprintfun} />
      <Route path="/createtable" component={createtable} />
    </div>  
  </Router>
)  
ReactDOM.render(routing, document.getElementById('root')); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();