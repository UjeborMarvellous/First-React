import React from "react";
const Navbar = () => {
    return ( 
        <nav className="flex navbar">
            <h1 className="text-5xl font-mono text-red-400 hover:cursor-pointer">The Dojo Blog</h1>
            <div className="links ml-auto">
                <a className= "ml-4 p-2 hover:text-white hover:bg-red-400 hover:transition duration-500 ease-in-out" href="/">Home</a>
                <a className= " text-white bg-red-400 rounded-lg ml-4 p-2 hover:text-white hover:bg-red-400 hover:transition duration-500 ease-in-out" href="/create">New States</a>
            </div>
        </nav>
     );
}
 
export default Navbar;