import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../store/userStore";

const Navbar = () => {
    const { userData } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return ( 
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-white text-lg font-semibold">EMCKart</span>
                </div>
                { userData ?
                <div className="flex items-center">
                    <label className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Welcome {userData?.name}!</label>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 font-medium rounded" onClick={() => dispatch(clearUser())}>Logout</button>
                </div> :
                <div className="flex items-center">
                    <a href="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                    <a href="/signup" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign up</a>
                </div>
                }
            </div>
        </nav>
     );
}

export default Navbar;