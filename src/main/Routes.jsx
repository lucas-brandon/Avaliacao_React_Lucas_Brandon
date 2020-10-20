import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

//import Todo from '../todo/Todo';
//import About from '../about/About';
import Index from '../pages/home/Index.jsx'
import Cards from '../pages/cards/Index.jsx'
import Blocks from '../pages/blocks/Index.jsx'
import Forms from '../pages/forms/Index.jsx'
import Pricing from '../pages/pricing/Index.jsx'

export default props => (
    <Router history={hashHistory}>
        <Route path='/index' component={Index}></Route>
        <Route path='/cards' component={Cards}></Route>
        <Route path='/blocks' component={Blocks}></Route>
        <Route path='/forms' component={Forms}></Route>
        <Route path='/pricing' component={Pricing}></Route>
        {/*
        <Route path='/gallery' component={Gallery}></Route>
        <Route path='/studio' component={Studio}></Route>
        <Route path='/blog' component={Blog}></Route>
        <Route path='/contatos' component={Contatos}></Route>
        <Redirect from='*' to='/index'></Redirect>
        */}
        <Redirect from='*' to='/index'></Redirect>
        
    </Router>
)