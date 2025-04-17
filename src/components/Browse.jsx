import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies.js";
import Header from "./Header.jsx";
import MainContainer from "./MainContainer.jsx";
import SeconadaryContainer from "./SeconadaryContainer.jsx";
import useTrendingMovies from "../hooks/useTrendingMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  
  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()
  useUpcomingMovies()

  return (
    <>
        <Header /> 
        {
           showGptSearch ? (<GptSearch />) : <>  <MainContainer />   <SeconadaryContainer />  </>
        } 
       
    </>
  );
};

export default Browse;
