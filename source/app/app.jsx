import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';


// components
import AboutComponent from './components/about';
import WeatherComponent from './components/weather/index';
import MainComponent from './components/main';
import ExamplesComponent from './components/examples'; 

render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>
      <Route path="about" component={AboutComponent} />
      <Route path="examples" component={ExamplesComponent} />
      <IndexRoute component={WeatherComponent}/>
    </Route>
    
  </Router>
  , document.getElementById('app'));