import React  from 'react';
import Home from './Home';
import Services from './Services';
import Contactus from './Contactus';
import {Switch,Route} from 'react-router-dom';

const RoutingComponent=() =>(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/services' component={Services}/>
        <Route  path='/contactus' component={Contactus}/>
    </Switch>    

)

export default RoutingComponent;