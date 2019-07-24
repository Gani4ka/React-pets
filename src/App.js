import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pets from './pages/Pets/Pets';
import PetPage from './pages/PetPage/PetPage';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pets/:petId" component={PetPage} />
      <Route path="/pets" component={Pets} />
      <Route component={PageNotFound} />
    </Switch>
  </>
);

export default App;
