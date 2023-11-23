import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopFoodCard = ({food}) => {
    const{quantity,price,category,name,image,_id} = food;
    return (
        <div>
            <div className=" h-52 flex gap-3 pl-4  items-center  rounded-md bg-gray-100">
                    <div className="relative">
                        <img src={image} className="w-44 h-44  rounded-md" alt="" />
                        <h3 className="font-bold text-white bg-[#1d1c1a5b] px-2 rounded-br-md absolute top-0">{category}</h3>

                    </div>
                    <div className="h-44">
                        <h1 className="text-xl text-black font-bold">{name}</h1>
                        <div className='mt-6'>
                        <h3 className="text-black"><span className='font-bold text-orange-400'>Price:</span> ${price}</h3>
                        <h3 className="text-black"><span className='font-bold text-orange-400'>Quantity:</span> {quantity} Pcs.</h3>
                        </div>
                        <Link to={`/details/${_id}`}>
                        <button className="btn mt-6 btn-sm bg-orange-400 py-2 px-6 rounded border-none text-white hover:bg-orange-100 hover:text-orange-400">Details</button>
                        </Link>
                    </div>
                    
            </div>
        </div>
    );
};

TopFoodCard.propTypes = {
    food:PropTypes.object
};

export default TopFoodCard;