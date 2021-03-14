import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import NavBar from './Components/Navbar';

const App = () => {

  return (
    
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact render={()=><Home />}>
          </Route>
          <Route path='/About' exact render={()=><About />}>
          </Route>
        </Switch>
    </Router>

    
  )
}

export default App