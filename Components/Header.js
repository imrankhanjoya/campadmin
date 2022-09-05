



export default function Header() {
 

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
                    <text x="8" y="20" font-size="20" fill="black" font-family='ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'>P</text>

                    </svg>
                    <span className="ml-3 text-xl">POSEPOP.</span>
                </a>
                
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href="brand" className="mr-5 hover:text-gray-900 menu">Brand</a>
                        <a href="users" className="mr-5 hover:text-gray-900 menu">Users</a>
                        <a href="/campaign" className="mr-5 hover:text-gray-900 menu">Campaign</a>

                        <a href="/dashboard" className="mr-5 hover:text-gray-900 menu">Dashboard</a>
                        <a href="/influancer" className="mr-5 hover:text-gray-900 menu">Influancer</a>
                    </nav>
                    <a href="/api/auth/signout" className="inline-flex items-center bg-[#f5333f] py-1 px-3 focus:outline-none  hover:text-[#f5333f] hover:bg-white  border-2 border-[#f5333f] text-white rounded-full text-base mt-4 md:mt-0 space-x-2">
                        <img src="" className="w-5 rounded-full" />
                        <label className="menu">Logout</label>
                    </a>
            </div>
        </header>
    )
}