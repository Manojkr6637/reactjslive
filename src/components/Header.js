 


 import React from 'react'
 import logo from './../logo.png'
 const Header = () => {
   return (
    <header className="App-header bg-cyan-600 ">
     <div className='flex'>
        <div className='w-[30%] h-[4rem]'>
           <img className=' m-2 p-2 w-[4rem] h-[3.5rem]' src={logo} alt='Logo' />
        </div>
        <div className='w-[60%] h-[4rem]'>
         <ul className='flex text-white'>
            <li className='pt-5'>
             <a href='#'>
              Home</a>
            </li>
            <li className='pt-5 ml-4'>
            <a href='#'>
              About Us</a>
            </li>
            <li className='pt-5 ml-4'>
            <a href='#'>
              Projects</a>
            </li>
            <li className='pt-5 ml-4'>
            <a href='#'>
              Work Experiences
              </a>
            </li>
            <li className='pt-5 ml-4'>
            <a href='#'>
              Extra Curriculum
              </a>
            </li>
            <li className='pt-5 ml-4'>
            <a href='#'>
              Blog
              </a>
            </li>
            <li className='pt-5 ml-4'>
            <a href='#'>
             My Gallery
             </a>
            </li>
            <li className='pt-5 ml-5'>
            <a href='#'>
              Contact US
              </a>
            </li>
         </ul>
            
        </div>
        <div className='w-[10%] h-[4rem]'>
          <ul>
             <li className='pt-5 ml-4'>
             <a href='#' alt="User"><i class="fa-regular fa-user"></i>
              </a>
            </li>
         </ul>
        </div>
     </div>
       
    </header>
   )
 }
 
 export default Header