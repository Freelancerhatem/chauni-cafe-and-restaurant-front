import { Link } from 'react-router-dom';
import chef from '../../../assets/images/chef.jpg'
import './Banner.css'

const Banner = () => {
  return (
    <div className="res-banner  max-w-full  grid grid-cols-2 lg:px-14 px-2 items-center" >
      <div className=' text-white md:space-y-4 shadow-2xl '>
        <p className=' md:hidden'>Welcome to,Chauni Cafe & Restaurant</p>
        <h1 className='lg:text-5xl md:text-base  text-base md:font-bold lg:font-extrabold md:leading-relaxed '>Create Memories <br /> One Dish Time</h1>
        <p className='lg:text-xl md:text-xs hidden md:block'>Welcome to <span className='text-orange-400 '>Chauni Cafe & Restaurant,</span><br /> where culinary excellence meets warm hospitality. Our restaurant is a haven for food enthusiasts seeking a delightful dining experience.</p>
        <Link to={'/allitems'}>
        <button className='btn btn-xs lg:btn-md md:btn-sm mt-4 bg-orange-400 border-none text-white hover:bg-orange-300'>Explore All Items</button>
        </Link>
      
      <div className='md:flex hidden  gap-4 md:pt-5 lg:pt-10'>
        <div className='border-r-2 pr-2 border-orange-400'>
          <h1 className='text-4xl font-bold'>356+</h1>
          <p>Daily Guests</p>
        </div>
        <div className='border-r-2 pr-2 border-orange-400'>
          <h1 className='text-4xl font-bold'>26+</h1>
          <p>Branches Stores</p>
        </div>
        <div>
          <h1 className='text-4xl font-bold'>50+</h1>
          <p>Various Menus</p>
        </div>
        
      </div>
      </div>
      
      <div className=' relative h-full '>
        <img src={chef}alt="" className='lg:relative absolute md:absolute lg:h-full bottom-0 md:block   md:-bottom-0 lg:bottom-0' />
      </div>

    </div>
  );
};

export default Banner;