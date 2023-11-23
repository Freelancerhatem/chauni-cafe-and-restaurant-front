
import PropTypes from 'prop-types';
const SearchItems = ({searchfood}) => {
    const{quantity,price,category,name,image}= searchfood;
    console.log(name)
    return (
        <div className='w-screen'>
            <div className="w-1/2 mx-auto mt-20 h-52 flex gap-3 pl-4  items-center  rounded-md bg-gray-800">
                    <div className="relative">
                        <img src={image} className="w-44 h-44  rounded-md" alt="" />
                        <h3 className="font-bold text-white bg-[#00000065] px-2 rounded-br-md absolute top-0">{category}</h3>

                    </div>
                    <div className="h-44">
                        <h1 className="text-xl text-white font-bold">{name}</h1>
                        
                        <h3 className="text-white">{price}</h3>
                        <h3 className="text-white">{quantity}</h3>
                        <button className="btn mt-12 btn-sm bg-orange-400 border-none">Details</button>
                    </div>
                    
                </div>
        </div>
    );
};
SearchItems.propTypes={
    searchfood:PropTypes.object

}

export default SearchItems;

