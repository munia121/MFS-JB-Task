import axios from 'axios';
import { useState } from 'react';

const ApproveUser = () => {
  const [userId, setUserId] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5000/admin`, { userId });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Error approving user');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
      <button type="submit">Approve User</button>
    </form>
  );
};

export default ApproveUser;
