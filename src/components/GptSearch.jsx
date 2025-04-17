import { BG_URL } from "../utils/constant"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <>
    
       <div className="absolute -z-10">
       <img className="h-screen object-cover" src={BG_URL} alt="bg" />
      </div>
      <div className="">
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    </>
  )
}

export default GptSearch
