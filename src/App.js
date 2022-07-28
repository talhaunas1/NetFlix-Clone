import React from 'react';
import './App.css';
import Row from './component/Row';
import requests from './request';
function App() {
  return (
    <div className="App">
      <Row fetchUrl={requests.fetchNetflixOriginals} />
      <Row  fetchUrl={requests.fetchTrending}  />
    </div>
  );
}

export default App;
