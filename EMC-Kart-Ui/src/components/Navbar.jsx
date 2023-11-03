import SignupModal from "./SignupModal"

const Navbar = () => {
    return ( 
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-white text-lg font-semibold">EMCKart</span>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                    <SignupModal />
                </div>
            </div>
        </nav>
     );
}

export default Navbar;