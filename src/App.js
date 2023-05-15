import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import {  Route, Switch } from 'react-router-dom';
import Lunch from './Lunch';
import Biryani from '../src/Biryani';
import Home from './Home';
import Breakfast from "./Breakfast"


import Menu from "./Menu";
import Dinner from './Dinner';
import "../src/components/responsive.css";
import Navbar1 from  "../src/Navbar1";
import Scrolltotop from './Scrolltotop';


const App = () => {
  return (
    <>

   {/* <Menu/> */}
{/* <Navbar1/> */}

<Scrolltotop />

      <Switch>
      <Route exact path="/" component={Menu} />
        <Route exact path="/chicken" component={Home} />
        <Route exact path="/biryani" component={Biryani} />
        <Route exact path="/breakfast" component={Breakfast} />
        <Route exact path="/lunch" component={Lunch} />
        <Route exact path="/dinner" component={Dinner} />
       

      </Switch>
   
   
   

    </>
  );
};

export default App;