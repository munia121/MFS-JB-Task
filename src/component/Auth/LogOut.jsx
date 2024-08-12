// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleLogout = async () => {
//       try {
//         // Remove the token from localStorage
//         localStorage.removeItem('token');
//       } catch (error) {
//         console.error('Error logging out:', error);
//       } finally {
//         // Redirect to login page
//         navigate('/login', { replace: true });
//       }
//     };

//     handleLogout();
//   }, [navigate]);

//   return <div>Logging out...</div>;
// };

// export default Logout;








import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      // Remove the token from localStorage
      localStorage.removeItem('token');

      // Redirect to login page
      navigate('/login', { replace: true });
    };

    handleLogout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
