import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/home';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {

  return (
    
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact render={()=><Home />}>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>

    
  )
}

export default App