import React from 'react';
import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { NotFound } from './components/NotFound/NotFound';
import { BrowsePokemon } from './components/BrowsePokemon/BrowsePokemon';
import './App.scss';

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/browse/:id" component={BrowsePokemon} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
