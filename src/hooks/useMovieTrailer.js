import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_options } from "../utils/constant"
import { addTrailerVideo } from "../utils/moviesSllice"

const useMovieTrailer = (movieId) => {
     
    const dispatch = useDispatch()

    const movieTrailer = useSelector(store => store.movies.movieTrailer)

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_options)
        const json = await data.json()

        const filterData = json.results.filter((video) => video.type == "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]

        dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(() => {
      !movieTrailer && getMovieVideos()   
    }, [])
  

}

export default useMovieTrailer