import { Link } from '@inertiajs/react';
import ThemeController from './theme-controller';
const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {' '}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />{' '}
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href={route('home')} className="text-base-content">
                                Homepage
                            </Link>
                        </li>
                        <li>
                            <Link href={'#features'} className="text-base-content">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href={'#portofolio'} className="text-base-content">
                                Portofolio
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Project Webify</a>
            </div>
            <div className="navbar-end">
                <ThemeController></ThemeController>
                <button className="btn btn-ghost btn-circle ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {' '}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />{' '}
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
