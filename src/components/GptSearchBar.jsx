import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import openai from "../utils/openai"

  const GptSearchBar = () => {
  
    const langKey = useSelector((store) => store.config.lang)
    const searchText = useRef(null)

    const handleGptSearchClick = async () => {
       console.log(searchText.current.value)

       const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query " + searchText.current.value +". Only give me names of 5 movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Ek Tha Tiger, Golmaal";

        const gptResults =  await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-4o-mini",
      });

      if(!gptResults.choices){

      }

        console.log(gptResults.choices?.[0]?.message.content )  
    } 

    return (
      <div className="pt-[45%] md:pt-[10%]  flex justify-center">
         <form className=" bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
             <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/>
             <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
         </form>
      </div>
    )
  }
  
  export default GptSearchBar
  