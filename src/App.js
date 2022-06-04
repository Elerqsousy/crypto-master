import './css-reset.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Nav from './components/navigation/Nav';
import Home from './pages/home';
import Details from './pages/details';
import Profile from './pages/profile';
import Favourites from './pages/favourites';
import Trending100 from './pages/trending100';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":coinId" element={<Details />} />
        </Route>
        <Route path="/profile">
          <Route index element={<Profile />} />
        </Route>
        <Route path="/trending100">
          <Route index element={<Trending100 />} />
        </Route>
        <Route path="/favourites">
          <Route index element={<Favourites />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
