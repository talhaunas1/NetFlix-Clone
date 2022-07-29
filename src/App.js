import React from 'react';
import './App.css';
import Row from './component/Row';
import requests from './request';
function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
      {/* hello */}

    
    </div>
  );
}

export default App;
