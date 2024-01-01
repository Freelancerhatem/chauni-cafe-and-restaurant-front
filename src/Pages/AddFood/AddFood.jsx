
import { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const AddFood = () => {
    const{user}=useContext(AuthContext);
    const userName =user.displayName;
    const userEmail =user.email;
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getUTCDate().toString().padStart(2, '0');

    const yyMMDD = day + '/' + month + '/' + year.toString();

    const handelAddFood = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        // const userName = user.name;
        // const userEmail = user.email
        const category = form.category.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const origin = form.origin.value;
        
        const addFoodObject = {name,image,category,price,quantity,userName,userEmail,description,origin};
        console.log(addFoodObject);
        
        fetch('https://chauni-cafe-server.vercel.app/api/v1/addFood',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addFoodObject)

        })
        .then(res=>{
            Swal.fire({
                title: "Done!",
                text: "Your Food Added!",
                icon: "success"
              });
            console.log(res)})
        .catch(error=>console.log(error))


    }

    return (
        <div>
            <div className="grid grid-cols-2">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Food</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <div className="  bg-white pl-14 ">

                    <form onSubmit={handelAddFood}>
                        <h1 className="text-center text-3xl font-semibold mt-6 text-orange-400">Add Your Food</h1>

                        <div className="grid gap-6 my-6 lg:grid-cols-2">
                            <div>
                                <label htmlFor="foodname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name Of food</label>
                                <input type="text" id="first_name" name="name" className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="food name" required />
                            </div>
                            <div>
                                <label htmlFor="food price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                <input type="number" name="price" className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="food price" required />
                            </div>
                            <div>
                                <label htmlFor="food image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Food Image</label>
                                <input type="text" name="image" className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                                <label htmlFor="orderdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                                <input type="text" name="orderdate" defaultValue={yyMMDD} readOnly className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                                <label htmlFor="buyer name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add User Name</label>
                                <input type="text" readOnly name="username" defaultValue={userName} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                                <label htmlFor="buyer mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Email</label>
                                <input type="email" readOnly name="useremail" defaultValue={userEmail} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                            
                            <label htmlFor="option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Category</label>

                                <select htmlFor="Category" required name='category' className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">Category
                                    <option value="" selected>Select Category</option>
                                    <option value="Pasta">Pasta</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Salad">Salad</option>
                                    <option value="Burger">Burger</option>
                                    <option value="Sushi">Sushi</option>
                                    <option value="Stir-Fry">Stir-Fry</option>
                                    <option value="Seafood">Seafood</option>
                                    <option value="Mexican">Mexican</option>
                                    <option value="Beverage">Beverage</option>
                                    <option value="Side Dish">Side Dish</option>
                                    <option value="Soup">Soup</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                                <input type="number" name="quantity" min={0} className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div className=''>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Short Description</label>
                                <input type="text" name="description"  className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                            
                            <label htmlFor="option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Category</label>

                                <select htmlFor="origin" name='origin' required className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">Category
                                    <option value="" readOnly selected>Food Origin</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Mexican">Mexican</option>
                                    <option value="French">French</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="text-white w-full bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Add Food</button>
                    </form>


                </div>
                <div>
                    <img src={logo} className='  h-[80vh]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddFood;