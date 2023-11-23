
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
const Footer = () => {
    return (
        <div>
            
<footer className="bg-gray-50 rounded-lg shadow md:px-14 dark:bg-gray-900">
    <div className="w-full max-w-screen mx-auto  md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center justify-between mb-4 sm:mb-0">
                <img src={logo} className="h-20  lg:mr-3" alt="logo" />
                <span className="self-center lg:text-2xl md:text-base font-semibold whitespace-nowrap dark:text-white">Chauni Cafe & Restaurant</span>
            </a>
            <ul className="flex flex-wrap items-center px-4 md:px-0 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Chauni Cafe</Link>. All Rights Reserved.</span>
    </div>
</footer>


        </div>
    );
};

export default Footer;