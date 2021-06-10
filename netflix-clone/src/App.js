import React from 'react';
import './App.css';
import Row from './components/Row'
import Banner from './components/Banner'
import Nav from './components/Nav'
import requests from './requests'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row
       title="NETFLIX ORIGINALS" 
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow
       ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
