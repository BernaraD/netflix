import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../requests/requests";


function HomeScreen() {
    return (
        <div>
            <Nav/>

            <Banner/>

            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            
        </div>
    )
}

export default HomeScreen;