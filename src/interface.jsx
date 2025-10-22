import { useState } from 'react'
import { Menu, X, Github, Mail } from 'lucide-react'

function Interface () {

  const [ Open, setOpen ] = useState(false)

  return (
    <>
      <header className="w-full h-[72px] flex items-center justify-between">

        <div>
          <button
            onClick={() => setOpen(!Open)}
            className='ml-4 p-2 relative rounded-lg bg-gray-900 text-white transition duration-300 ease-out'>
            {Open ? <X size={24} /> : <Menu size={24} />}
          </button>
          {Open && (
            <div className='mt-3 ml-6 absolute border-2 border-gray-400 rounded-lg shadow-sm flex flex-col items-center justify-evenly h-60 w-36'>
              <button className="p-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Federal</button>
              <div className="w-4/5 border-t border-gray-400"></div>
              <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">State</button>
              <div className="w-4/5 border-t border-gray-400"></div>
              <button className="p-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Private</button>
            </div>
           )}
        </div>

        <a href="https://www.npmjs.com/package/nigerian-universities-data" target="_blank"><button className="mr-3 p-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">View NPM Package</button></a> 
      </header>


      <div className="mx-auto mt-[280px] w-[85vw] border-t border-gray-300"></div>
    <p className="mt-[30px] text-center text-2xl font-bold text-black">Directory of Nigerian Universities.</p>

    <div className="mx-auto mt-6 w-[85vw] h-[500px] border border-gray-300 rounded-2xl shadow-xl flex flex-col items-center justify-evenly">
      
      <div className="flex space-x-3">
        <input className="w-[58vw] pl-2 border border-gray-300 rounded-lg shadow-sm font-medium text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300" type="search" placeholder="Search..."/>
        <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Search</button>
      </div>

      <p className="text-center text-xl font-semibold text-black">University Name: <span className="text-lg font-medium text-black">University of Ibadan</span></p>
      <p className="text-xl font-semibold text-black">University Type: <span className="text-lg font-medium text-black">Federal</span></p>
      <p className="text-xl font-semibold text-black">Location: <span className="text-lg font-medium text-black">Oyo-State</span></p>
      <p className="text-xl font-semibold text-black">Year of Establishment: <span className="text-lg font-medium text-black">2025</span></p>
      <p className="text-center text-xl font-semibold text-black">Official Website: <a href='universityofibadan' className="text-lg font-medium text-blue-600 underline">universityofibadan</a></p>

      <div className="flex space-x-8">
        <button className="h-10 w-24 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Previous</button>
        <button className="h-10 w-24 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out">Next</button>
      </div>
    </div>

    <div className="mx-auto mt-[100px] w-[85vw] border-b border-gray-300"></div>

    <footer className="mt-12 text-center font-medium text-base text-gray-700">Copyright  &copy; 2025 Anthony.</footer>

    <div className="h-16 w-full flex items-center justify-center space-x-6 text-lg text-gray-600">
      <a className='hover:text-black' href='https://github.com/Hub-devAnthony'><Github /></a>
      <a className='hover:text-black' href="mailto:isijolaayomikun04@gmail.com"><Mail /></a>
    </div>
    </>
  );
}

export default Interface;