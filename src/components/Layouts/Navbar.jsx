import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { BsCartCheck, BsFillPersonFill, } from 'react-icons/bs';
import { FaShoppingBag } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link as ScroolLink } from 'react-scroll';


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // onScroll navbar
  const [isScroll, setisScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setisScroll(scrollValue > 10)
    };
    window.addEventListener('scroll', handleScroll);

    // clean the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // onScroll navbar end

  const handleLogOut = e => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FFA726",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {

        signOutUser()
          .then(() => {

          })
          .catch(() => {


          })
        Swal.fire({
          title: "Success!",
          text: "Log out success",
          icon: "success"
        });
      }
    });




  }
  return (
    <div  className={`${isScroll ? 'bg-black bg-opacity-30 backdrop-blur-md' : 'bg-black bg-opacity-10'} transition-colors transform duration-200 ease-in-out w-screen  fixed z-30 grid md:grid-cols-3 grid-cols-3 lg:px-14 md:px-3`}>


      {/* navlink start */}
      <div className="hidden md:flex md:text-[10px]  lg:text-base  ">

        <ul className="flex items-center font-medium  lg:py-4  md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-2 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-400 rounded-md " : ""
          }>
            <li>

              <button className="block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded" aria-current="page">Home</button>
            </li>
          </NavLink>


          <NavLink to='/allitems' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-400 md:rounded-md rounded-sm " : ""
          }>
            <li>

              <button className="block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded" aria-current="page">All Items</button>
            </li>
          </NavLink>
          <NavLink to='/profile' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-orange-400 rounded-md" : ""
          }>
            <li>

              <button className={'block py-2 pl-1 lg:pl-3 lg:pr-4 text-white  rounded'} aria-current="page">Profile</button>
            </li>
          </NavLink>
          <div className=" ">
            <ul className="menu  menu-horizontal text-white  px-1">

              <li>
                <details>
                  <summary className="text-white hover:bg-transparent focus:bg-none  hover:text-white">
                    Pages
                  </summary>
                  <ul className=" bg-base-100 text-black w-44 rounded-t-none">
                    <li><ScroolLink to="about" className="block py-2 cursor-pointer pl-1 lg:pl-3 lg:pr-4   rounded" smooth={true} duration={500}>About</ScroolLink></li>
                    <li><ScroolLink to="top" className="block py-2 cursor-pointer pl-1 lg:pl-3 lg:pr-4   rounded" smooth={true} duration={500}>Top Foods</ScroolLink></li>
                    <li><ScroolLink to="book" className="block py-2 cursor-pointer pl-1 lg:pl-3 lg:pr-4   rounded" smooth={true} duration={500}>Booking</ScroolLink></li>
                    
                  </ul>
                </details>
              </li>
            </ul>
          </div>




        </ul>
      </div>
      {/* navlink end */}
      {/* sm nav */}
      <div className="dropdown col-span-1  md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <Link to={'/'}>Home</Link>
          <Link to={'/allitems'}>All Items</Link>
          <Link to={'booking'}>Booking</Link>
          <Link to={'/profile'}>Profile</Link>
        </ul>
      </div>
      {/* sm nav */}

      <div className="flex   justify-center items-center">
        <img src={logo} className="md:w-20 w-12" alt="" />
        <h2 className="text-white text-[6px] lg:text-xl hidden md:block md:text-[10px] uppercase md:font-bold">Chauni Cafe & Restaurant</h2>
      </div>

      <div className="flex justify-end md:gap-6 ">
        <div className="text-white hidden lg:flex justify-start items-center space-x-4">

          <Link to={'/MyOrders'}><FaShoppingBag className="text-2xl"></FaShoppingBag></Link>

        </div>


        {
          user ?
            <div className="flex gap-3 items-center">

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-4 z-[1] bg-gray-50 shadow menu menu-sm dropdown-content  rounded w-52 ">
                  <div className="  py-1 flex flex-col ">
                    <h1 className="text-black  text-base font-bold">{user.displayName}</h1>
                    <Link to={'/addFood'}>
                      <h1 className="bg-gray-100 hover:text-orange-400 my-3  py-1 pl-1 rounded-md">Add A Food</h1>
                    </Link>

                    <Link to={'/myAddFood'}>
                      <h1 className="bg-gray-100 hover:text-orange-400 mb-3 py-1 pl-1 w-full">My added foods</h1>
                    </Link>

                    <Link to={'/MyOrders'}>
                      <h1 className="bg-gray-100 hover:text-orange-400 py-1 pl-1 rounded-md">My Orders</h1>
                    </Link>
                  </div>


                </ul>
              </div>




              <button onClick={handleLogOut} className="btn md:btn-sm btn-xs bg-orange-400 border-none text-white hover:bg-orange-300 ">Logout</button>
            </div>
            :
            <div className="flex gap-3 items-center">
              <BsFillPersonFill className="text-white"></BsFillPersonFill>
              <Link to={'/login'}>
                <button className="btn btn-sm">Login</button>
              </Link>
              <Link to={'/signup'}>
                <button className="btn btn-sm">Registration</button>
              </Link>
            </div>
        }



      </div>

    </div>
  );
};

export default Navbar;