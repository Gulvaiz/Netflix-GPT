import { useEffect } from "react";
import { API_options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSllice";

const useNowPlayingMovies = () => {
const dispatch = useDispatch()

const nowPlayingMovies= useSelector((store) => store.movies.nowPlayingMovies)

 const getNowPlayingMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
       
     const json = await data.json()
     dispatch(addNowPlayingMovies(json.results))
 }

 useEffect(() => {
  !nowPlayingMovies && getNowPlayingMovies()
}, [])
}

export default useNowPlayingMovies