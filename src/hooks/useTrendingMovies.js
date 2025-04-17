import { useDispatch } from "react-redux"
import { addTrendingMovies } from "../utils/moviesSllice"
import { useEffect } from "react"
import { API_options } from "../utils/constant"
import { useSelector } from "react-redux"

const useTrendingMovies = () => {
     const dispatch = useDispatch()

     const trendingMovies = useSelector(store => store.movies.trendingMovies)

      const getTrendingMovies = async () => {
           const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options)
           const json = await data.json()
          
           dispatch(addTrendingMovies(json.results))
      }

      useEffect(()=> {
         !trendingMovies && getTrendingMovies()
      }, [])
}

export default useTrendingMovies