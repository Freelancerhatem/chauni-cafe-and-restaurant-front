
import PropTypes from 'prop-types';
import { RiDeleteBin7Line } from "react-icons/ri";


const OrdersFood = ({ orderData, handleDelete }) => {
    const { image, foodname, foodprice, _id } = orderData;





    return (
        <div className='px-14'>

            <div className=" bg-white h-[22rem] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg h-[13rem] w-full" src={image} alt="" />
                </a>
                <div className="p-5">
                    <div className='flex justify-between items-center'>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{foodname}</h5>
                        </a>
                        <h2>${foodprice}</h2>
                    </div>
                    <button onClick={() => handleDelete(_id)} className="inline-flex mt-6 items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-300 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                        Remove item
                        <RiDeleteBin7Line className='text-xl'></RiDeleteBin7Line>
                    </button>
                </div>
            </div>

        </div>
    );
};

OrdersFood.propTypes = {
    orderData: PropTypes.object,
    handleDelete: PropTypes.func
};

export default OrdersFood;