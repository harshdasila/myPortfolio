import React from 'react'
import Navbar from '../components/Navbar'
import cuIMG from '../images/cuIMG.png'
import Image from 'next/image'
import capIMG from '../images/capIMG.svg'
import ibmImg from '../images/ibm.png'
import coursera from '../images/coursera.png'
import standFordImg from '../images/standford.png'
import linkedin from '../images/linkedin.png'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-2'>
        <div className='p-4'>
            <Image className='h-30 w-auto ' src={capIMG} alt='img'></Image>
        </div>
        <div>
            <div className='text-center mt-20 text-5xl font-sans font-bold'>EDUCATION</div> 
            <div className='text-center mt-10 text-4xl font-sans font-semibold'>Basic Qualification and Certifcations</div>
            <ul className='text-center justify-center flex p-3 m-2 '>
                <li className='hover:transform hover:scale-105'> 
                    <a href="https://drive.google.com/file/d/1ppT66PgGNrYKCQK9mIxDWi6s-AVcSd7F/view?usp=sharing" target="_blank">
                    <Image className='h-14 w-14 mx-3 rounded-2xl' src={coursera} alt='img'></Image> 
                    </a>
                    </li>
                <li className='hover:transform hover:scale-105'> 
                    <a href='https://drive.google.com/file/d/1Mj1v7RgWICWIu8QRrzO7nVJ6XWrEtlwI/view?usp=sharing' target='_blank'>
                    <Image className='h-14 w-14 mx-3 rounded-2xl' src={ibmImg} alt='img'></Image> 
                    </a>
                </li>
                <li className='hover:transform hover:scale-105'> 
                    <a href="https://drive.google.com/file/d/1CW7kt73nV1Mi43p_j_D1feQO7AeDXZ_5/view?usp=sharing" target="_blank">
                    <Image className='h-14 w-14 mx-3 rounded-2xl' src={standFordImg} alt='img'>
                    </Image> 
                    </a>
                </li>

                <li className='hover:transform hover:scale-105'> 
                    <a href='https://drive.google.com/file/d/1fNFgV_9zectbbv26vKFOBt5KVzBhflME/view?usp=sharing' target='_blank'>
                    <Image className='h-14 w-14 mx-3 rounded-2xl' src={linkedin} alt='img'></Image> 
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div className='text-center text-4xl font-semibold p-4'>DEGREE RECEIVED</div>
    
    <div className='flex justify-center items-center p-8'>
        <div className='rounded-full overflow-auto w-32 h-32 shadow-lg'>
            <Image className='object-fill w-full h-full' src={cuIMG}  alt='college-logo'></Image>
        </div>
        <div className='border border-gray-400 shadow-3xl  w-2/3 edu p-5 rounded-lg mx-3'>

            <div className='flex text-xl font-semibold font-sans text-blue-900 '>
                <div className='flex-grow'>Chandigarh University, Punjab</div>
                <div className='text-right'>2020-Present</div>
            </div>
            
            <div className='text-xl font-semibold font-sans text-blue-900'>B.E in Computer Science, Specialization - AIML </div>
            <div >
                <ul className='text-xl '>
                    <li className='my-4'>⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, DL, AI etc.</li>
                    <li className='my-4'>⚡ Apart from this, I have done certification courses on Deep Learning, Data Science and Full Stack Development.</li>
                    <li className='my-4'>⚡ Also done various projects for hands on experience and to make myself ready.</li>
                </ul>
            </div>
            
        </div>
        
        
    </div>
    <div className='py-10 text-2xl font-sans text-center p-3 text-gray-500'>Made with ❤️ by Harsh Dasila</div>
    </>
  )
}

export default page
