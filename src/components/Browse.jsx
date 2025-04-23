import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SeconadaryContainer from "./SeconadaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
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
