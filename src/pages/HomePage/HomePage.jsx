import { useAuth } from "../../component/Auth/AuthPrivet";
import Banners from "../../component/HomeComponent/Banners";



const HomePage = () => {
    const {user} = useAuth;
    console.log(user)
    return (
        <div>
            <Banners></Banners>
        </div>
    );
};

export default HomePage;