import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // console.log(user)
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:5000/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(res.data.user);
                setTransactions(res.data.transactions);
            } catch (err) {
                setError(err.response?.data?.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className=" p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Account Information</h2>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role} </p>
                    <p>Mobile Number: {user.mobileNumber}</p>
                    <p>Account Balance: {user.balance} Taka</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
                    <ul>
                        {transactions.map((transaction) => (
                            <li key={transaction._id} className="border-b py-2">
                                <p>Type: {transaction.type}</p>
                                <p>Amount: {transaction.amount} Taka</p>
                                <p>Date: {new Date(transaction.date).toLocaleString()}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}
            <Sidebar></Sidebar>
            <div className="flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
