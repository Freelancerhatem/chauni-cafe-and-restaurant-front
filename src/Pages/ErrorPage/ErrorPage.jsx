import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/error.jpg'

const ErrorPage = () => {
    return (
        <div className='w-screen h-screen flex items-center relative'>
            <img className='w-1/2 mx-auto h-1/2  ' src={errorImg} alt="" />
            <Link to={'/'}>
            <button className="btn bg-[#ee5a2a] hover:bg-[#ee5b2ad8] text-[#fffefe] absolute left-1/2 top-[80%]">Go Home</button>

            </Link>
        </div>
    );
};

export default ErrorPage;