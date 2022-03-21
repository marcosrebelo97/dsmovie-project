import axios from "axios";
import Pagination from "components/Pagination";
import MovieCard from '../../components/MovieCard/index';
import { BASE_URL } from "utils/requests";
import { useState, useEffect } from "react";
import { Movie Page } from "types/movie";

function Listing (){    

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number);
        });
    }, []);

    //forma errada
  

    return (  
    <>
        <Pagination/>
        <div className="container">
            <div className="row"> 
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>

                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard/>
                </div>
            </div>
        </div>   
    </>
    );
}

export default Listing;