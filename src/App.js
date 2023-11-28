import Header from './containers/Header';
import './App.css';
import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';


function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element = {<ProductListing/>}/>
          <Route path='/product/:productId' exact element ={<ProductDetails/>} />
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
