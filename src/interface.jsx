import { Twitter, Github, Mail } from 'lucide-react'

function Interface () {
  return (
    <>
    <header className="w-full h-[72px] border-b border-gray-300 flex items-center justify-between">
      <nav className="space-x-4 lg:space-x-12">
        <button className="ml-3 p-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Federal</button>
        <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">State</button>
        <button className="p-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Private</button>
      </nav>
      <a href="https://www.npmjs.com/package/nigerian-universities-data" target="_blank"><button className="mr-3 p-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">View NPM Package</button></a> 
    </header>

    <p className="mt-[100px] text-center text-2xl font-bold text-black">Directory of Nigerian Universities.</p>

    <div className="mx-auto mt-6 w-[85vw] h-[400px] border border-gray-300 rounded-2xl shadow-xl flex flex-col items-center justify-evenly">
      
      <div className="flex space-x-3">
        <input className="w-[65vw] pl-2 border border-gray-300 rounded-lg shadow-sm font-medium text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300" type="search" placeholder="Search..."/>
        <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Search</button>
      </div>

      <p className="text-xl font-semibold text-black">University Name: <span className="text-lg font-medium text-black">University of Ibadan</span></p>
      <p className="text-xl font-semibold text-black">University Type: <span className="text-lg font-medium text-black">Federal</span></p>
      <p className="text-xl font-semibold text-black">Location: <span className="text-lg font-medium text-black">Oyo-State</span></p>
      <p className="text-xl font-semibold text-black">Year of Establishment: <span className="text-lg font-medium text-black">2025</span></p>
      <p className="text-xl font-semibold text-black">Official Website: <span className="text-lg font-medium text-black">universityofibadan</span></p>

      <div className="flex space-x-40">
        <button className="h-10 w-24 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Previous</button>
        <button className="h-10 w-24 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Next</button>
      </div>
    </div>

    <div className="mt-[100px] w-[85vw] border-b border-gray-300"></div>

    <footer className="mt-12 text-center font-medium text-base text-gray-700">Copyright  &copy; 2025 Anthony.</footer>

    <div className="h-16 w-full flex items-center justify-center space-x-6 text-lg text-gray-600">
      <a className='hover:text-black' href='https://github.com/Hub-devAnthony'><Github /></a>
      <a className='hover:text-black' href="mailto:isijolaayomikun04@gmail.com"><Mail /></a>
    </div>
    </>
  );
}

export default Interface;