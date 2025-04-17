
const VideoTitle = ({title, overview}) => {
  return (
    <>
        <div className="pt-[13%] px-3 md:px-[10%] absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
          <div className="mx-2 md:m-0">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            </div>
            <div className="my-4 md:m-0 mx-2">
                <button className="bg-white text-black  md:p-4 md:px-12 px-3 p-1 text-xl rounded-lg hover:bg-opacity-80">Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block">More Info</button>
            </div>
        </div>
    </>
  )
}

export default VideoTitle
