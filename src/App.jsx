import { useState, useEffect } from 'react';
import './App.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/user')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, {userData.name}!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Referral Code</h2>
            <p className="text-2xl text-blue-500">{userData.referralCode}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Total Donations Raised</h2>
            <p className="text-2xl text-green-500">${userData.donationsRaised}</p>
          </div>
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Rewards & Unlockables</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded border">
              <h3 className="font-medium">Bronze Tier</h3>
              <p className="text-sm text-gray-600">Unlocked at $100</p>
            </div>
            <div className="p-4 bg-gray-50 rounded border opacity-50">
              <h3 className="font-medium">Silver Tier</h3>
              <p className="text-sm text-gray-600">Unlocked at $500</p>
            </div>
            <div className="p-4 bg-gray-50 rounded border opacity-50">
              <h3 className="font-medium">Gold Tier</h3>
              <p className="text-sm text-gray-600">Unlocked at $1000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <Dashboard /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />;
};

export default App;