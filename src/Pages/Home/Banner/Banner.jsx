import { Link } from 'react-router-dom';
import chef from '../../../assets/images/chef.png'
import './Banner.css'
import NumberCount from '../../../components/NumberCount/NumberCount';
import { IoRestaurant } from "react-icons/io5";
import useAos from '../../../Hooks/useAos';

const Banner = () => {
  useAos();
  return (
    <div name='home' className="res-banner  max-w-full  grid grid-cols-2 lg:px-14 px-2 items-center" >
      <div className=' text-white md:space-y-4 shadow-2xl '>
        <p  className=' md:hidden'>Welcome to,Chauni Cafe & Restaurant</p>
        <p data-aos='fade-down' data-aos-duration='1000' className='lg:text-5xl  md:text-xs hidden md:block'>Welcome to <br /> <span className='text-orange-400 '>Chauni Cafe & Restaurant</span></p>
        <Link to={'/allitems'}>
          <button type="button" className="text-white mt-4 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex items-center gap-1">Explore items <IoRestaurant className='text-2xl   '/></button>
        </Link>

        <div className='md:flex hidden  gap-4 md:pt-5 lg:pt-10'>
          <div className='border-r-2 pr-2 border-orange-400'>
            <h1 className='text-4xl font-bold'><NumberCount endValue={350}></NumberCount>+</h1>
            <p>Daily Guests</p>
          </div>
          <div className='border-r-2 pr-2 border-orange-400'>
            <h1 className='text-4xl font-bold'><NumberCount endValue={30}></NumberCount>+</h1>
            <p>Branches Stores</p>
          </div>
          <div>
            <h1 className='text-4xl font-bold'><NumberCount endValue={50}></NumberCount>+</h1>
            <p>Various Menus</p>
          </div>

        </div>
      </div>

      <div className=' relative h-full '>
        <img src={chef} alt="" className='lg:relative absolute md:absolute lg:h-full bottom-0 md:block   md:-bottom-0 lg:bottom-0' />
      </div>

    </div>
  );
};

export default Banner;