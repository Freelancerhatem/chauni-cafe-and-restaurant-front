import { BsHeartArrow } from "react-icons/bs";
import banner from '../../assets/images/cafe-mozaic.jpg'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";
const Reservation = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5sx7ybg', 'template_fjjf6na', e.target, 'uvSy1pe9ap-JM7kRS')
          .then((result) => {
              console.log(result.text);
              Swal.fire({
                title: "Success!",
                text: "Message Sent successfully!",
                icon: "success"
              });
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div name="book">
            <div className="relative mt-12">
                <img
                    src={banner}
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <div className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <a

                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                >
                                    <h4 className="flex items-center gap-2   text-xl text-orange-400">Reservation <BsHeartArrow className="text-3xl" ></BsHeartArrow></h4>
                                </a>
                                <h2 className="max-w-lg mb-6 leading-relaxed  text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Elevating Food <br className="hidden md:block" /> Experience


                                </h2>
                                <p className="max-w-xl  mb-4 text-base text-gray-400 md:text-lg">
                                    we are dedicated to providing more than just a meal; we offer a complete dining experience. Our services go beyond exceptional food. From warm and welcoming hospitality to a cozy ambiance, we are committed to creating moments of joy and satisfaction for our valued guests.
                                </p>

                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-gray-200 bg-opacity-25 rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Reserve A Table
                                    </h3>
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="full name"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Full name
                                            </label>
                                            <input
                                                placeholder=""
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="name"
                                                name="Fname"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="date"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Date:
                                            </label>
                                            <input
                                                placeholder=""
                                                required
                                                type="date"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="date"
                                                name="date"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="phone"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                Phone
                                            </label>
                                            <input
                                                placeholder="Phone Number"
                                                required
                                                type="tel"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="phone"
                                                name="number"
                                            />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label
                                                htmlFor="email"
                                                className="inline-block mb-1 font-medium"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                placeholder="mail@example.com"
                                                required
                                                type="email"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="inline-flex bg-orange-400 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >
                                                Reserve Now
                                            </button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reservation;