import { BsHeartArrow } from "react-icons/bs";
import food1 from '../../assets/images/food-1.jpg'
import food2 from '../../assets/images/food-2.jpg'
import food3 from '../../assets/images/food-3.jpg'
import food4 from '../../assets/images/food-4.jpg'
import icon1 from '../../assets/icon/icon-01.png'
import icon2 from '../../assets/icon/icon-02.png'

const About = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1  md:px-2 lg:px-14 mt-20">
            <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
                <img src={food1} className="h-[340px] rounded-md" alt="" />
                <img src={food2} className="h-[340px] rounded-md" alt="" />
                <img src={food3} className="h-[340px] rounded-md" alt="" />
                <img src={food4} className="h-[340px] rounded-md" alt="" />
            </div>
            <div className="lg:px-14 flex flex-col justify-center">
                <a

                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                    <h4 className="flex items-center gap-2   text-xl text-orange-400">About us <BsHeartArrow className="text-3xl" ></BsHeartArrow></h4>
                </a>

                <div>
                    <h1 className="md:text-5xl font-semibold leading-snug ">Where Flavour Meets <br /> Imagination</h1>
                    <p className="md:text-lg text-xs">We are a dedicated team, committed to serving exceptional food. Our passion for culinary excellence and warm hospitality defines our journey. Join us for a remarkable dining experience</p>

                    <div className="space-y-2 mt-4">
                        <div className=" flex gap-3">
                            <img src={icon1} className="w-32 h-32 bg-slate-200 p-3 rounded-md" alt="" />
                            <div>
                                <h3 className="md:text-lg text-xs font-bold">Savory Delight: The Ultimate Burger  Experience</h3>
                                <p className="text-xs">Start your day with our exquisite omelets, prepared with a culinary touch that elevates breakfast to an art form. Our omelets are a canvas of flavors, filled with farm-fresh ingredients and love.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <img src={icon2} className="w-32 h-32 bg-slate-200 p-3 rounded-md" alt="" />
                            <div>
                                <h3 className="md:text-lg text-xs font-bold">Brunch Bliss: The Perfect Marriage of Omelet</h3>
                                <p className="text-xs">Indulge in our mouthwatering burgers, crafted with the finest ingredients and bursting with flavor. Whether you prefer classic beef, succulent chicken, or our savory plant-based options.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn md:btn-md btn-xs text-white md:mt-6 bg-orange-400 hover:bg-orange-300">About More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;