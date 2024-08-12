import { Link } from "react-router-dom";

const Nvabar = () => {

    return (
        <div>
            <div className="navbar bg-pink-700">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                       
                    </div>
                    <Link to={'/'} className="text-4xl text-white">Bkash</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    
                </div>
                <div className="navbar-end">
                    <Link to={'register'}><button className="btn">Register</button></Link>
                    <Link to={'Login'}><button className="btn">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Nvabar;