import { useAuth } from "../../../component/Auth/AuthPrivet";

const UserInfo = () => {

    const {user} = useAuth()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
        </div>
    );
};

export default UserInfo;