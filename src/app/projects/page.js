import React from 'react'
import Navbar from '../components/Navbar'
import projectIMG from '../images/projectIMG.svg'
import Image from 'next/image'

const Education = () => {
  return (
    
    <div>
    <Navbar/>
    <div className='grid grid-cols-2 mt-10'>
      <div className=''>
        <Image className='h-[26rem] w-[76rem] p-4' src={projectIMG} />
        
      </div>
      <div className='p-8 w-full items-center justify-center'>
        <div className='flex justify-center font-bold text-5xl font-mono '>PROJECTS</div>
        <p className='flex justify-center text-center text-gray-400 text-2xl py-10 leading-normal font-sans'>My projects makes use of vast variety of latest technology tools. My best experience is to create Front-end projects and deploy them to web applications using cloud infrastructure.</p>
      </div>
    </div>

    <div className='p-8 flex'>

      <div className='h-[13rem] w-[30rem] rounded-lg border border-solid border-gray-400 projects p-4 flex-row m-5 shadow-2xl'>
        <a className='text-3xl text-blue-950 font-sans font-semibold cursor-pointer' href='https://harsh-youtube.vercel.app/' target='_blank'>☞ Youtube Clone</a>
        <div className='p-2'>
        Developed a YouTube Clone using ReactJs where features such as Caching, Debouncing, Live Chat, Nested Comments are Included.Streamlined data management capabilities by leveraging the power of Redux Toolkit.
        </div>
        {/* <div className='text-gray-400 text-2xl py-10 leading-normal font-sans'>Created on 22/08/2023</div> */}
      </div>

      <div className='h-[13rem] w-[30rem] rounded-lg border border-solid border-gray-400 projects p-4 flex-row m-5 shadow-2xl'>
        <a className='text-3xl text-blue-950 font-sans font-semibold cursor-pointer' href='https://github.com/harshdasila/Path-Finder-Visualizer/tree/main/src' target='_blank'>☞ Path Finder Visualizer</a>
        <div className='p-2'>
        A react Application Used to visualize classical path finding algorithms like BFS, DFS, Dikstra's, A-star.
        Features to add and remove walls.
        </div>
      </div>

      <div className='h-[13rem] w-[30rem] rounded-lg border border-solid border-gray-400 projects p-4 flex-row m-5 shadow-2xl'>
        <a className='text-3xl text-blue-950 font-sans font-semibold cursor-pointer' href='https://affectionate-lewin-f29344.netlify.app/' target='_blank'>☞ Movies App</a>
        <div className='p-2'>
        Created a website that uses an API (TMDB) to fetch all the data and then displaying it.Created a website that uses an API (TMDB) to fetch all the data and then displaying it.
        </div>
      </div>

    </div>
    <div className='py-10 text-2xl font-sans text-center p-3 text-gray-500'>Made with ❤️ by Harsh Dasila</div>
    </div>
  )
}

export default Education
