
import logo from '../../assets/images/logo.png'
import footer from '../../assets/images/footer_2.jpg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as ScroolLink } from 'react-scroll';
const Footer = () => {
    const footerUrl = `url(${footer})`
    return (
        <div>

            <footer style={{ backgroundImage: footerUrl }} className="bg-gray-600 bg-center bg-cover bg-no-repeat">

                <div className='max-w-7xl mx-auto border-b-4 border-orange-400 border-dotted'>
                    <div className="   mx-auto  md:py-8">
                        {/* 1 */}
                        <div className="sm:flex sm:items-center   sm:justify-between">
                            <div className="flex items-center  mx-auto  justify-between mb-4 sm:mb-0 bg-gradient-to-tl from-orange-400 to-orange-300 rounded-lg px-4 py-2">
                                <div className='flex items-center'>
                                    <img src={logo} className="h-16 bg-black rounded-full  lg:mr-3" alt="logo" />
                                    <span className=" lg:text-2xl md:text-base font-semibold  text-black">Enjoyed your meal?Leave us a review</span>
                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                        {/* 2 */}
                        <div className='text-white mt-6'>
                            <div>
                                <h1 className='text-xs font-extrabold'>Address</h1>
                                <p className='text-lg font-extralight'>Govindaganj,Melandah,Jamalpur</p>
                            </div>
                            <div className='mt-6'>
                                <h1 className='text-xs font-extrabold'>Call us</h1>
                                <p className='text-lg font-extralight'>(234)-1122334455</p>
                            </div>
                            <div className='flex gap-1 mt-6'>
                                <button className='bg-orange-400 rounded-full p-2 text-white'>
                                    <FaFacebookF></FaFacebookF>
                                </button>
                                <button className='bg-orange-400 rounded-full p-2 text-white'>
                                    <FaLinkedinIn></FaLinkedinIn>
                                </button>
                                <button className='bg-orange-400 rounded-full p-2 text-white'>
                                    <FaXTwitter></FaXTwitter>
                                </button>


                            </div>
                        </div>

                    </div>
                </div>

                <div className='max-w-7xl mx-auto text-white'>
                    
                    <div className="mx-auto text-white flex justify-center items-center py-2 gap-2 cursor-pointer">
                        <ScroolLink to='home' smooth={true} duration={500}>Home</ScroolLink>   
                        <ScroolLink to='about' smooth={true} duration={500}>About</ScroolLink>   
                        <ScroolLink to='top' smooth={true} duration={500}>Top Food</ScroolLink>   
                        <ScroolLink to='book' smooth={true} duration={500}>Reserve</ScroolLink>   
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Footer;