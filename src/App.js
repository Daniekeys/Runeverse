import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import AssetInfo from './pages/AssetInfo'
import Community from './pages/Community'
import Collection from './pages/Collection'

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/mycollection" element={<Profile />} />
        <Route  path="/item" element={<AssetInfo />} />
        <Route  path="/community" element={<Community />} />
        <Route  path="/collection" element={<Collection />} />
       
      </Routes>
    </>
  );
}

export default App;
