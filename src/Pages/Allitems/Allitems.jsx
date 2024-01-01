import { useLoaderData } from "react-router-dom";
import Items from "./Items";
import { RiSearch2Fill } from "react-icons/ri";
import { MdFoodBank, MdOutlineDoubleArrow, } from "react-icons/md";
import { LuSearchX } from "react-icons/lu";
import { useEffect, useState } from "react";
import SearchItems from "../SearchItems/SearchItems";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { Helmet } from "react-helmet";

const Allitems = () => {
    const foods = useLoaderData();
    const [Search, setSearch] = useState('');
    const [SerachfoodArray, setSerachfoodArray] = useState([]);
    const [PaginationVisibility, setPaginationVisibility] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const foodlength = foods.length;

    // pagination part//
    const [foodPerPages, setfoodPerPages] = useState(9);
    const [currentPageNumebr, setCurrentPageNumber] = useState(0);
    const PagesNumber = Math.ceil(foodlength / foodPerPages);
    const pages11 = [...Array(PagesNumber).keys()];
    const [PaginationFood, setPaginationFood] = useState([]);
    //handleClick for set option data in a state;
    const handleitemFoods = (e) => {
        e.preventDefault();
        const valueofpages = parseInt(e.target.value);

        setfoodPerPages(valueofpages)


    }


    useEffect(() => {
        fetch(`https://chauni-cafe-server.vercel.app/api/v1/foodpagination?pages=${currentPageNumebr}&size=${foodPerPages}`)
            .then(res => res.json())
            .then(data => setPaginationFood(data))
    }, [currentPageNumebr, foodPerPages]);

    // pagination part//


    const handleSearch = e => {
        e.preventDefault();
        let searchInputValue = e.target.search.value;

        setSearch(searchInputValue.toLowerCase());
        // const findSearchFood = foods?.filter(findfood => findfood.name.toLowerCase() === Search);
        // setSerachfoodArray(findSearchFood);
        e.target.search.value = '';
        setPaginationVisibility(false);


    }
    const handleSearchClear = e => {
        e.preventDefault();
        setSearch('');
        setPaginationVisibility(true);



    }



    useEffect(() => {
        const findSearchFood = foods?.filter(findfood => findfood.name.toLowerCase() === Search);
        setSerachfoodArray(findSearchFood);
    }, [Search, foods]);

    useEffect(()=>{
        const delay = setTimeout(() => {
            setIsLoading(false);
          }, 3000);
      
          
          return () => clearTimeout(delay);
    },[])



    if(isLoading){
        return(
            <div className="w-screen h-[80vh] flex items-center justify-center">
                 <span className="loading loading-dots mx-auto loading-lg"></span>
            </div>
        )
    }
    return (
        <div className="pt-20">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Food Menu</title>

            </Helmet>
            <div className="px-14">
                <div className="flex mt-4 text-3xl uppercase justify-center items-center">
                    <MdFoodBank></MdFoodBank>
                    <h1 className="text-center text-3xl font-bold text-orange-400">best food menu</h1>
                    <MdOutlineDoubleArrow></MdOutlineDoubleArrow>
                </div>
                <div className="relative mx-auto w-1/3 mt-12 ">


                    <form className="" onSubmit={handleSearch}>
                        <input type="text" name="search" placeholder="search by food name, example: chicken alfredo" className="input  relative input-bordered border-x-4 border-x-orange-400 focus:outline-none mx-auto  w-full " required />
                        <button type="submit" className=" absolute bottom-3 right-8 text-2xl" ><RiSearch2Fill title="search"></RiSearch2Fill></button>
                    </form>
                    <button onClick={handleSearchClear} className=" absolute bottom-3 right-2 text-2xl" ><LuSearchX title="clear search"></LuSearchX></button>
                </div>
            </div>

            {/* search section start */}

            {
                // SerachfoodArray.length == 0 ? <SearchError></SearchError>
                // :
                SerachfoodArray.length > 0
                    ?
                    // Search ? 
                    SerachfoodArray?.map((searchfood, idx) => <SearchItems key={idx} searchfood={searchfood}></SearchItems>)


                    // search section end
                    :


                    <div className="grid grid-cols-3 gap-4 px-14 mt-12  max-w-screen">
                        {

                            PaginationFood.map((food, index) => <Items key={index} food={food}></Items>)
                        }


                    </div>
            }
            {/* pagination button */}
            {
                PaginationVisibility == true ?
                    <div>
                        {
                            <div className=' flex justify-center items-center mt-8 mb-44'>
                                <button className='btn btn-sm  bg-transparent text-black border-none text-xl' onClick={currentPageNumebr > 0 ? () => setCurrentPageNumber(currentPageNumebr - 1) : () => setCurrentPageNumber(currentPageNumebr)}><BsArrowLeftCircleFill></BsArrowLeftCircleFill></button>
                                {
                                    pages11.map((page, index) =>

                                        <button
                                            onClick={() => setCurrentPageNumber(page)}
                                            className=
                                            {currentPageNumebr === page ? 'btn btn-xs  mx-1 bg-orange-400 hover:bg-orange-400' : 'btn btn-xs  mx-1'}


                                            key={index}
                                        >{page}
                                        </button>

                                    )
                                }

                                <button className='btn btn-sm bg-transparent text-black border-none text-xl' onClick={currentPageNumebr < pages11.length - 1 ? () => setCurrentPageNumber(currentPageNumebr + 1) : null}><BsArrowRightCircleFill></BsArrowRightCircleFill></button>
                                <div className="flex items-center justify-center">
                                    {/* <h2 className="text-xl">Food Per Page</h2> */}
                                    {/* <select name="page" className='bg-orange-400 rounded-lg ml-14' onChange={handleitemFoods} id="">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select> */}

                                    <select className="select select-info w-full max-w-xs bg-orange-50" name="page" onChange={handleitemFoods}>
                                        <option disabled selected className="text-xl">Food Per Page? </option>
                                        <option value="3">3</option>
                                        <option value="6">6</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                        }
                    </div>
                    : null
            }


        </div>
    );
};

export default Allitems;