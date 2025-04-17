import { useSelector } from "react-redux"
import VideoBackground from "../components/videoBackground.jsx"
import VideoTitle from "./VideoTitle.jsx"

const MainContainer = () => {
    
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return

   const miniMovie = movies[0]
   const {original_title, overview, id} = miniMovie

  return (
    <>
     <div className="pt-[30%] bg-black md:pt-0">
       <VideoTitle overview={overview} title={original_title} />
       <VideoBackground movieId={id} />
       </div>
    </>
  )
}

export default MainContainer
