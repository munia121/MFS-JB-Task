import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './Auth/AuthPrivet';

const NavBar = () => {

    // const user = true
    const [isOpen, setIsOpen] = useState(false)
    const { token, logout, user } = useAuth()

console.log(user)

    const handleLogout = () => {
        logout()
    };






    return (
        <div>
            <div className='fixed w-full bg-pink-700  shadow-sm'>
                <div className='py-4 border-b-[1px]'>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}
                        <div>
                            <Link to='/'>
                                {/* <h3 className='text-3xl'>Diagnostic Center</h3> */}
                                <h3 className='text-4xl text-white'>Bkash</h3>

                            </Link>
                        </div>
                        <div>
                            {/* <div className='flex gap-6 items-center'>
                                <NavLink to={'/contact'} className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5 font-bold transition-colors duration-300 transform  hover:bg-gray-300   lg:block hidden hover:text-gray-700 ${isActive ? 'bg-blue-500  text-white rounded-lg' : 'text-blue-500 border border-blue-500 rounded-lg'
                                    }`
                                }>
                                    <span>Contact</span>
                                </NavLink>
                                <NavLink to={'/about-us'} className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5 font-bold transition-colors duration-300 transform  hover:bg-gray-300   lg:block hidden hover:text-gray-700 ${isActive ? 'bg-blue-500  text-white rounded-lg' : 'text-blue-500 border border-blue-500 rounded-lg'
                                    }`
                                }>
                                    <span>About Us</span>
                                </NavLink>
                                <NavLink to={'/blog'} className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5 font-bold transition-colors duration-300 transform  hover:bg-gray-300   lg:block hidden hover:text-gray-700 ${isActive ? 'bg-blue-500  text-white rounded-lg' : 'text-blue-500 border border-blue-500 rounded-lg'
                                    }`
                                }>
                                    <span>Blog</span>
                                </NavLink>
                                {user && <NavLink
                                    to='/alltest'

                                    className={({ isActive } ) =>
                                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 hidden md:block ${isActive ? 'bg-blue-500  text-white rounded-lg' : 'text-blue-500 border border-blue-500 rounded-lg'
                                        }`
                                    }
                                >

                                    <span className='mx-4 font-medium'>All Test</span>
                                </NavLink>}


                            </div> */}
                        </div>
                        {/* Dropdown Menu */}
                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                {/* Become A Host btn */}
                                <div className='hidden md:block'>
                                    {!user && (
                                        <button
                                            disabled={!user}
                                            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                                        >
                                        </button>
                                    )}
                                </div>


                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    {/* <AiOutlineMenu /> */}
                                    <div className='hidden md:block'>
                                        {/* Avatar */}
                                        <img
                                            className='rounded-full'
                                            referrerPolicy='no-referrer'
                                            src={user && user.photoURL ? user.photoURL : ''}
                                            alt='profile'
                                            height='30'
                                            width='30'
                                        />
                                    </div>
                                </div>
                            </div>
                            {isOpen && (
                                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                    <div className='flex flex-col cursor-pointer'>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Home
                                        </Link>
                                        <NavLink to={'/contact'} className={'block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'}>
                                            <span>Contact</span>
                                        </NavLink>
                                        <NavLink to={'/about-us'} className={'block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'}>
                                            <span>About Us</span>
                                        </NavLink>
                                        <NavLink to={'/blog'} className={'block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'}>
                                            <span>Blog</span>
                                        </NavLink>
                                        <NavLink to={'/alltest'} className={'block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'}>
                                            <span>All test</span>
                                        </NavLink>

                                        {!token ? (
                                            <>
                                                <>
                                                    <Link
                                                        to='/login'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Login
                                                    </Link>
                                                    <Link
                                                        to='/register'
                                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                    >
                                                        Register
                                                    </Link>
                                                </>
                                            </>
                                        ) : (
                                            <>
                                                <Link to={'/logout'}
                                                    onClick={handleLogout}
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                                >
                                                    Logout
                                                </Link>
                                                <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>

                                                    {/* {
                                                userData.status === 'Active' ? <Link to={'/dashboard'}>Dashboard</Link> : <button onClick={handleStatus}>Dashboard</button>
                                            } */}
                                                    <Link to={'/dashboard'}>Dashboard</Link>
                                                </div>
                                            </>

                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;