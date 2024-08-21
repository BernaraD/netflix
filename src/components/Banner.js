import "./Banner.css"
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import requests from "../requests/requests";

function Banner() {

    const [movie, setMovie] = useState( [] );

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get( requests.fetchNetflixOriginals );
            setMovie(
                request.data.results[Math.floor( Math.random() * request.data.results.length - 1 )]
            );
            return request;
        }

        fetchData()
    }, [] )

    console.log( movie )


    function truncate_description(string, n) {
        return string?.length > n ? string.substr( 0, n - 1 ) + "..." : string
    }


    return (
        <header
            className="banner"
            style={ {
                backgroundSize: "cover",
                // backgroundImage: `url("https://nyctastemakers.com/wp-content/uploads/2021/10/NYCTM-Home-Banner-39.png")`,
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${ movie?.backdrop_path }")`,
                backgroundPosition: "center center ",
            } }>


            <div className="banner__contents">

                <h1 className="banner_title">{ movie?.title || movie?.name || movie?.original_name }</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    { truncate_description( `${ movie?.overview }`, 150 ) }
                </h1>
            </div>

            <div className="banner__fadeBottom"/>

        </header>
    )
}

export default Banner;