import React,{useState,useEffect} from 'react';
import axios from '../axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_img_url = "https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,isLargeRow}) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

	useEffect(() => {
		async function fetchData(){
			const request = await axios.get(fetchUrl);
			//console.log(request);
			setMovies(request.data.results);
			return request;
		};
		fetchData();
	}, [fetchUrl]);

	//console.table(movies);

	// const handleClick = async (movie) => {
 //    if (trailerUrl) {
 //      setTrailerUrl("");
 //    } else {
 //      let trailerurl = await axios.get(
 //        `/movie/${movie.id}/videos?api_key=eb037a6e4ca4cf5d0a2bf6dd77ab384e`
 //      );
 //      setTrailerUrl(trailerurl.data.results[0]?.key);
 //    }
 //  };

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name||"")
      .then((url)=>{
      	const urlParams = new URLSearchParams(new URL(url).search);
      	setTrailerUrl(urlParams.get('v'));
      })
      .catch((error)=>console.log(error))
    }
  };

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="posters">
				{movies.map(movie=>
					movie.backdrop_path!==null && (
					<img 
					key={movie.id}
					className = {`poster ${isLargeRow && "posterLarge"}`}
					src={`${base_img_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
					alt={movie.name}
					onClick={() => handleClick(movie)}
					>	
					</img>
				))}
			</div>
			{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
		</div>
	)
}

export default Row