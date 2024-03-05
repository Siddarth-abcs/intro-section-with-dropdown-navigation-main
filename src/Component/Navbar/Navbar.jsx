import React, { useState } from 'react'

import logo from '../../../images/logo.svg';
import menu from '../../../images/icon-menu.svg';
import closemenu from '../../../images/icon-close-menu.svg';


import uparrow from '../../../images/icon-arrow-up.svg';
import downarrow from '../../../images/icon-arrow-down.svg';


import Todo from '../../../images/icon-todo.svg';
import Calendar from '../../../images/icon-calendar.svg';
import Reminders from '../../../images/icon-reminders.svg';
import Planning from '../../../images/icon-planning.svg';

export const Navbar = () => {

  const[btn,setBtn]=useState(false);

  const[Featurs,setFeaturs]=useState(false);
  const[Company,setCompany]=useState(false);


  

  return (
    <nav className='relative py-6'>

      <div className='flex justify-between w-[90%] h-[40px] m-auto'>

        <div className='flex'>
          <img src={logo} alt="" />
           {/* destop version */}

        <div className='hidden md:block'>
        <div className='flex justify-between w-[80vw]'>
          {/* link btn */}

          <ul className='ml-16 flex'>
            {/* featurs */}
            <li className='mr-6'>
            <div className='flex items-center font-medium text-2xl' onClick={()=> setFeaturs(!Featurs)}>
            Feauters {Featurs ? <img src={uparrow} alt="" className='mt-1 ml-1' /> : <img src={downarrow} alt="" className='mt-1 ml-1' />}
            </div>
            {
              Featurs &&
              <ul className='px-4 py-2 ml-[-2rem] rounded bg-almostWhite shadow mt-6'>
              <li className='flex text-1xl items-center py-2'>
                <img src={Todo} alt="" className='h-5 mx-2' />
                Todo List
              </li>
              <li className='flex text-1xl items-center py-2'>
                <img src={Calendar} alt="" className='h-5 mx-2' />
                Calendar
              </li>
              <li className='flex text-1xl items-center py-2'>
                <img src={Reminders} alt="" className='h-5 mx-2' />
                Reminders
              </li>
              <li className='flex text-1xl items-center py-2'>
                <img src={Planning} alt="" className='h-5 mx-2' />
                Planning
              </li>
            </ul>
            }
            </li>
            {/* company */}
            <li className='mr-6'>
            <div className='flex items-center font-medium text-2xl' onClick={()=> setCompany(!Company)}>
            Company {Company ? <img src={uparrow} alt="" className='mt-1 ml-1' /> : <img src={downarrow} alt="" className='mt-1 ml-1' />}
            </div>
            {
              Company &&
              <ul className='px-4 py-2 rounded bg-almostWhite shadow mt-6'>
              <li className='flex text-1xl items-center py-2'>
                History
              </li>
              <li className='flex text-1xl items-center py-2'>
                Our Team
              </li>
              <li className='flex text-1xl items-center py-2'>
                Blog
              </li>
            </ul>
            }
            </li>
            <li className='font-medium text-2xl mr-6'>Careers</li>
            <li className='font-medium text-2xl mr-6'>About</li>
          </ul>

        <div className='flex flex-row fixed right-8'>
        <button className='py-2 mx-2 mr-8 font-medium rounded w-[6rem] m-auto '>Login</button>
        <button className='py-2 mx-2 mr-8 font-medium rounded w-[6rem] m-auto outline outline-mediumGray'>Register</button>
        </div>
        </div>
        </div>

        </div>
        {/* mobile */}
        <button onClick={()=>{setBtn(!btn)}} className='z-20 md:hidden'>
          {!btn ? <img src={menu} alt="menu" /> : <img src={closemenu} alt="closemenu" />}
        </button>

        {!btn || 
        <div className='h-screen w-4/6 absolute top-0 right-0 z-10 py-16 shadow bg-almostWhite'>
        <ul className='w-4/6 m-auto mt-4'>
          <li className='py-2'>
            <div className='flex items-center font-medium' onClick={()=> setFeaturs(!Featurs)}>
            Feauters {Featurs ? <img src={uparrow} alt="" className='mt-1 ml-1' /> : <img src={downarrow} alt="" className='mt-1' />}
            </div>
            {
              Featurs &&
              <ul className='py-2'>
              <li className='flex text-1xl items-center py-2'>
                <img src={Todo} alt="" className='h-5 mx-2' />
                Todo List
              </li>
              <li className='flex text-1xl items-center py-2'>
                <img src={Calendar} alt="" className='h-5 mx-2' />
                Calendar
              </li>
              <li className='flex text-1xl items-center py-2'>
                <img src={Reminders} alt="" className='h-5 mx-2' />
                Reminders
              </li>
              <li className='flex text-1xl items-center py-2'>
                <img src={Planning} alt="" className='h-5 mx-2' />
                Planning
              </li>
            </ul>
            }
          </li>
          <li className='py-2'>
          <div className='flex items-center font-medium' onClick={()=> setCompany(!Company)}>
            Company {Company ? <img src={uparrow} alt="" className='mt-1 ml-1' /> : <img src={downarrow} alt="" className='mt-1' />}
            </div>
            {
              Company &&
              <ul className='ml-2'>
              <li className='flex text-1xl items-center py-2'>
                History
              </li>
              <li className='flex text-1xl items-center py-2'>
                Our Team
              </li>
              <li className='flex text-1xl items-center py-2'>
                Blog
              </li>
            </ul>
            }
          </li>
          <li className='py-2 font-medium'>Careers</li>
          <li className='py-2 font-medium'>About</li>
        </ul>
        {/* login & register */}
        <div className='flex flex-col'>
        <button className='py-2 my-2 font-medium rounded w-5/6 m-auto '>Login</button>
        <button className='py-2 font-medium rounded w-5/6 m-auto outline outline-mediumGray'>Register</button>
        </div>
        </div>  
        }

     

        

      </div>

    </nav>
  )
}
