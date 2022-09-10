import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Header() {
  const router = useRouter();
  return (
    <div>
        <div className="h-16 lg:flex w-full border-b border-gray-200 bg-white  hidden px-10">
        <div className="flex h-full text-gray-600 ">
          <Link href={"/tables/influencer"}><a className={`cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8 ${router.pathname == '/tables/influencer'?"border-blue-500 text-blue-500":""}`}>Influancer</a></Link>
          <Link href={"/tables/brands"}><a className={`cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8 ${router.pathname == '/tables/brands'?"border-blue-500 text-blue-500":""}`}>Brands</a></Link>
          <Link href={"/tables/campaings"}><a className={`cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8 ${router.pathname == '/tables/campaings'?"border-blue-500 text-blue-500":""}`}>Campaings</a></Link>
          <Link href={"/tables/submissions"}><a className={`cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8 ${router.pathname == '/tables/submissions'?"border-blue-500 text-blue-500":""}`}>submissions</a></Link>
          <Link href={"/tables/adminusers"}><a className={`cursor-pointer h-full border-b-2 border-transparent inline-flex items-center mr-8 ${router.pathname == '/tables/adminusers'?"border-blue-500 text-blue-500":""}`}>users</a></Link>
        </div>
        <div className="ml-auto flex items-center space-x-7">
          <button className="h-8 px-3 rounded-md shadow text-white bg-blue-500">Button</button>
  
          <button className="flex items-center">
            <span className="relative flex-shrink-0">
              <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="profile" />
              <span className="absolute right-0 -mb-0.5 bottom-0 w-3 h-3 rounded-full bg-green-500 border border-white mongodb+srv://akramjoya:SimplySocial!123@cluster0.cl6q6ca.mongodb.net/border-gray-900"></span>
            </span>
            <span className="ml-2">James Smith</span>
            <svg viewBox="0 0 24 24" className="w-4 ml-1 flex-shrink-0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header