import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cube from './cube/Cube';
import Clock from './clock/Clock';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Cube} />
        <Route path='/clock' component={Clock} />
    </Switch>
);

export default Router;