import { Link } from "react-router-dom";

const Homepage=()=>{
    return(<>
        <div className="flex items-center justify-center min-h-screen">
  <div className="w-80 h-80 bg-gray-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
    {/* Titolo */}
    <h2 className="text-center font-bold text-2xl mb-4">Component Library</h2>

    {/* Bottone */}
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
      <Link to="/getStarted"> Get Started </Link>
      
    </button>
  </div>
</div>
    </>)
}

export default Homepage;