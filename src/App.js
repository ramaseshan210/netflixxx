import Banner from './Banner.js';
import './App.css';
import requests from './requests';
import Row from './Row'
import Nav from './Nav'


function App() {
  return (
    <div className="App">
      {/*nav*/}
     <Nav/>
    <Banner />
    <Row title="NETFLIX ORGINALS"  isLargeRow={true} fetchUrl={requests.fetchNetflixOrginals}/>
    <Row title="Trending Now "         fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"         fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies"         fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies"         fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies"         fetchUrl={requests.fetchHorroMovies}/>
    <Row title="Romance Movies"         fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries"         fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
