import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-2'>
        <div className='p-4'>
            <img className='h-30 w-auto ' src='https://cloocast.com/wp-content/uploads/2021/10/learning.svg'></img>
        </div>
        <div>
            <div className='text-center mt-20 text-5xl font-sans font-bold'>EDUCATION</div> 
            <div className='text-center mt-10 text-4xl font-sans font-semibold'>Basic Qualification and Certifcations</div>
            <ul className='text-center justify-center flex p-3 m-2 '>
                <li className='hover:transform hover:scale-105'> 
                    <a href="https://drive.google.com/file/d/1ppT66PgGNrYKCQK9mIxDWi6s-AVcSd7F/view?usp=sharing" target="_blank">
                    <img className='h-14 w-14 mx-3 rounded-2xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8cb6t0b5j8pdMb7qn-o9VFyKIEOkas4OBd4Do6PaHrbhpr7WTl19XJb0ZmJG1nkMaqo&usqp=CAU'></img> 
                    </a>
                    </li>
                <li className='hover:transform hover:scale-105'> 
                    <a href='https://drive.google.com/file/d/1Mj1v7RgWICWIu8QRrzO7nVJ6XWrEtlwI/view?usp=sharing' target='_blank'>
                    <img className='h-14 w-14 mx-3 rounded-2xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtAcR4B42l7lz28CK2NpWRSZWFgcJZriMvL20f8mUsPj4b7u_I5Z4SNGVJYuahChIDvQ&usqp=CAU'></img> 
                    </a>
                </li>
                <li className='hover:transform hover:scale-105'> 
                    <a href="https://drive.google.com/file/d/1CW7kt73nV1Mi43p_j_D1feQO7AeDXZ_5/view?usp=sharing" target="_blank">
                    <img className='h-14 w-14 mx-3 rounded-2xl' src='https://identity.stanford.edu/wp-content/uploads/sites/3/2020/07/block-s-right.png'>
                    </img> 
                    </a>
                </li>

                <li className='hover:transform hover:scale-105'> 
                    <a href='https://drive.google.com/file/d/1fNFgV_9zectbbv26vKFOBt5KVzBhflME/view?usp=sharing' target='_blank'>
                    <img className='h-14 w-14 mx-3 rounded-2xl' src='https://cdn-icons-png.flaticon.com/512/174/174857.png'>
                        </img> 
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div className='text-center text-4xl font-semibold p-4'>DEGREE RECEIVED</div>
    
    <div className='flex justify-center items-center p-8'>
        <div className='rounded-full overflow-auto w-32 h-32 shadow-lg'>
            <img className='object-fill w-full h-full' src='https://upload.wikimedia.org/wikipedia/commons/b/b0/Chandigarh_University_Seal.png' alt='college-logo'></img>
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
    </>
  )
}

export default page
