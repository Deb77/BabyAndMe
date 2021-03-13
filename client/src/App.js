import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/home';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import CrowdSourced from './Components/CrowdSourced/CrowdSourced';
import GoogleMapsWrapper from './Components/Utils/GoogleMapsWrapper';

const App = () => {
  const [isMapLoaded,setIsMapLoaded]= useState(false);

  return (
    <>
      <GoogleMapsWrapper setMapStatus={setIsMapLoaded} />
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact render={()=><Home />}>
          </Route>
          <Route path='/crowd' render={()=><CrowdSourced isMapLoaded={isMapLoaded} />}/> 
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App