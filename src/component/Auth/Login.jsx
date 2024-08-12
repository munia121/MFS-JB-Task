import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        identifier: '',
        pin: '',
    });

    const [error, setError] = useState()

    const { identifier, pin } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', formData);
            localStorage.setItem('token', res.data.token);
            alert('Logged in successfully');
            navigate('/', { replace: true })
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
            console.error(err);
        }
    };

    return (
        <form onSubmit={onSubmit} className='lg:pt-28'>
            <input
                type="text"
                name="identifier"
                value={identifier}
                onChange={onChange}
                required
                placeholder="Email or Mobile Number"
            />
            <input
                type="password"
                name="pin"
                value={pin}
                onChange={onChange}
                required
                placeholder="PIN"
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
