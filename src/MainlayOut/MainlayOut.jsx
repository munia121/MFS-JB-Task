import { Outlet } from 'react-router-dom';
import Nvabar from '../component/Nvabar';
import NavBar from '../component/NavBar';

const MainlayOut = () => {
    return (
        <div>
            {/* <Nvabar></Nvabar> */}
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainlayOut;