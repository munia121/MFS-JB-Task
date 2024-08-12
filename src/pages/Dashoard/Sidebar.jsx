import { Link } from "react-router-dom";
import useRole from "../../component/Hook/useRole";

const Sidebar = () => {
    const [role] = useRole()

    return (
        <div className='flex flex-col border w-36 h-screen bg-pink-700'>
            {
                role === 'user' && <>
                   <Link>Info</Link>
                   <Link>User</Link>
                </>
            },
            {/* *********** */}
            {
                role === 'admin' && <>
                    <Link>Admin</Link>
                </>
            }

        </div>
    );
};

export default Sidebar;