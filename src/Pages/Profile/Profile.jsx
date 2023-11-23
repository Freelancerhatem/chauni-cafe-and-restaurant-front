import { Helmet } from "react-helmet";


const Profile = () => {
    return (
        <div className="max-w-screen h-[80vh] flex flex-col justify-center items-center">
            <Helmet>
        <title>Profile</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <h1 className="text-3xl  font-bold">We`re Working on it...</h1>
            <h2 className="text-orange-400 mt-4">Please Login / Click On the Profile Picture for UserInfo.</h2>
        </div>
    );
};

export default Profile;