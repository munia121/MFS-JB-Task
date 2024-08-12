import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    pin: '',
    mobileNumber: '',
    email: '',
  });

  const { name, pin, mobileNumber, email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5000/register`, formData);
      alert(res.data.message);
      navigate('/login', { replace: true })
    } 
    catch (err) {
      console.error(err);
      alert(err.response
.        data.message);
    }
    
    
  };

  return (
    <form onSubmit={onSubmit} className='lg:py-28'>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
      <input type="password" name="pin" value={pin} onChange={onChange} placeholder="5-digit PIN" required />
      <input type="text" name="mobileNumber" value={mobileNumber} onChange={onChange} placeholder="Mobile Number" required />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
