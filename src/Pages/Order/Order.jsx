import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Order = () => {
    const orderFoodData = useLoaderData();
    const { name, price, quantity, image, count, _id } = orderFoodData;
    const [updateCount, setUpdateCount] = useState(count);
    const [updateQuantity, setupdateQuantity] = useState(quantity);
    const { user } = useContext(AuthContext);


    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getUTCDate().toString().padStart(2, '0');

    const yyMMDD = day + '/' + month + '/' + year.toString();



    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const foodname = form.foodname.value;
        const foodprice = form.foodprice.value;
        const foodquantity = form.foodquantity.value;
        const orderdate = new Date();
        const username = user.displayName;
        const useremail = user.email;
        setUpdateCount(updateCount + 1);
        setupdateQuantity(updateQuantity - 1);


        const updatedCountObject = { countValue: updateCount };
        const updatedQuantityObject = { quantityValue: updateQuantity };


        const orderInfo = { foodname, foodprice, foodquantity, username, useremail, orderdate, yyMMDD, image };

        fetch('https://chauni-cafe-server.vercel.app/api/v1/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(() => {

                fetch(`https://chauni-cafe-server.vercel.app/api/v1/updatecount/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedCountObject)

                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

                //   decrease the quantity updated



                fetch(`https://chauni-cafe-server.vercel.app/api/v1/updateQuantity/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedQuantityObject)

                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))


                Swal.fire({
                    title: "Done!",
                    text: "Food Purchase succesfully!",
                    icon: "success"
                });


            })
            .catch((err) => {
                console.log(err.message)
            })



        // console.log(updatedQuantityObject);
    }
    if (updateQuantity > 0 && updateCount !== quantity+1 )
        return (
            <div>
                <h1 className="text-center text-3xl mt-6 text-orange-400">Purchase Your Food</h1>
                {/* <button onClick={()=>setUpdateCount(count+1)}>{}</button> */}
                <div className="max-w-2xl mx-auto bg-white p-16">

                    <form onSubmit={handleForm}>
                        <div className="grid gap-6 mb-6 lg:grid-cols-2">
                            <div>
                                <label htmlFor="foodname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name Of food</label>
                                <input type="text" id="first_name" readOnly name="foodname" defaultValue={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="John" required />
                            </div>
                            <div>
                                <label htmlFor="food price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                                <input type="number" name="foodprice" readOnly defaultValue={price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Doe" required />
                            </div>
                            <div>
                                <label htmlFor="food quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                                <input type="number" name="foodquantity" readOnly defaultValue={updateQuantity} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                                <label htmlFor="orderdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purchase Date</label>
                                <input type="text" name="orderdate" defaultValue={yyMMDD} readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                                <label htmlFor="buyer name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buyer Name</label>
                                <input type="text" name="username" readOnly defaultValue={user.displayName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                            <div>
                                <label htmlFor="buyer mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buyer Email</label>
                                <input type="email" name="useremail" readOnly defaultValue={user.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
                            </div>
                        </div>

                        <button type="submit" className="text-white w-full bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Purchase</button>
                    </form>


                </div>
            </div>
        );
    else {
        return(
            <div className="max-w-screen h-[80vh] flex justify-center items-center">
                <h1 className="text-4xl text-orange-400">This Product Is Out Of Stock</h1>
            </div>
        )
    }
};

export default Order;