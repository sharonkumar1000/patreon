"use client"
import React,{useState} from 'react'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signIn,signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className='bg-blue-950 text-white flex justify-between px-5 items-center text-lg md:h-16 flex-col md:flex-row'>
      <Link href={"/"}>
      <div className="logo font-bold text-4xl md:text-base my-5 md:my-0">Get Me a chai</div>
      </Link>
      {/* <ul className='flex justify-between items-center gap-4'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>Project</li>
        <li>Sign Up</li>
        <li>Login In</li>
      </ul> */}
      <div className='relative flex flex-col md:block gap-4'>
        {session && <>
        
<button onClick={()=>{setShowdropdown(!showdropdown)}} onBlur={()=>{setTimeout(() => {
  setShowdropdown(false)
}, 1000)}} id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="multi-dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      
      <li>
        <Link href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">YourPage</Link>
      </li>
      <li>
        <Link onClick={()=>{signOut()}} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>

        </>}

        
        {session && <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={()=>{signOut()}}>Logout</button>}
        
        {!session && <Link href={"/login"}>
        <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar