import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Home from './components/views/Home'
import ProductInfo from './components/views/ProductInfo'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path='/info/:id' component={ProductInfo} />

    </Router>
  );
}

export default App;
