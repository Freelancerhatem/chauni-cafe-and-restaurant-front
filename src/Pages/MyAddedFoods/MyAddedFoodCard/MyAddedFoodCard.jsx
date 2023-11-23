
import PropTypes from 'prop-types';
import { GrDocumentUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const MyAddedFoodCard = ({ addedFood }) => {
    const { name, image, price, _id } = addedFood;

    
    return (
        <div>
            <div>
                <h1 className='text-3xl text-center mt-4 text-orange-400 underline font-bold w-80 mx-auto'>My Food List</h1>
            </div>
            <div className='grid grid-cols-4 px-14 mt-12'>

                <div className=" bg-white h-[22rem] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg h-[13rem] w-full" src={image} alt="" />
                    </a>
                    <div className="p-5">
                        <div className='flex justify-between items-center'>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            </a>
                            <h2>${price}</h2>
                        </div>
                        <Link to={`/updateFood/${_id}`}>
                        <button  className="w-full btn mt-6  px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-300 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                            Update Food Info
                            <GrDocumentUpdate className='text-xl text-white'></GrDocumentUpdate>
                        </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

MyAddedFoodCard.propTypes = {
    addedFood: PropTypes.object
};

export default MyAddedFoodCard;