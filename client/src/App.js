import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Donation from './Pages/Donation/donation';
import NavBar from './Components/Navbar';
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
          <Route path='/About' exact render={()=><About />}>
          </Route>   
          <Route path='/Donation' exact render={()=><Donation />}>
          </Route>  
          <Route path='/breastfeeding-center' render={() => <CrowdSourced isMapLoaded={isMapLoaded} />} />
        
        </Switch>
      </Router>
    </>
  )
}

export default App