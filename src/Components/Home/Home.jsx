import React from 'react' 

function Home() {
  return (
    <div className='bg-[#000000] h-[100%] text-white ' >
       <h1 className='font-bold text-3xl h-4 text-center  hover:text-4xl transition-all cursor-pointer text-white '  > My Portfolio </h1>
       
      <div className=' m-3  p-6 rounded-2xl min-h-[30vh] w-max border-solid border-4 border-gray-700 '>
        <div>
          
          <div className='flex '>
            <div>
              <h4 className='text-xl'> Learning Following :- </h4>
            </div>
            <div className='p-2  m-1 '>
              <h3 className='text-2xl text-gray-500 ' >HTML</h3>
              <h3 className='text-2xl text-gray-500 ' >CSS</h3>
              <h3 className='text-2xl text-gray-500 ' >JS</h3>
              <h3 className='text-2xl text-gray-500 ' >ReactJS</h3>
              <h3 className='text-2xl text-gray-500 ' >TailWind CSS</h3>
            </div>

          </div>
          <div>
            <h1>Links</h1>
            <a href="https://github.com/CodersHub-in" target='_blank'> <h2 className='hover:underline-offset-1 hover:underline ' > Visit GitHub 1</h2></a>
            <a href="https://github.com/CodersHub-ing" target='_blank'> <h2 className='hover:underline-offset-1 hover:underline ' > Visit GitHub 2</h2></a>
          </div>
        </div>
       
      </div>
       <div>
        
        <img src="src\Components\Header\resources\roboico.png" alt=" "/>
       </div>
    </div>
  )
}

export default Home
