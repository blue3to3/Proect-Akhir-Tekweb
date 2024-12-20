import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaUser, FaMoneyBill, FaCalendarCheck, FaBook, FaSignOutAlt } from 'react-icons/fa';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded">
                    <FaSignOutAlt /> Logout
                </button>
            </header>

            <main className="p-8">
                <h2 className="text-xl font-semibold mb-4">Selamat Datang di Dashboard Guru</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link to="/profile" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-100">
                        <FaUser size={40} className="text-blue-500 mb-2" />
                        <span className="text-gray-700 font-medium">Kelola Profil</span>
                    </Link>

                    <Link to="/salary" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-100">
                        <FaMoneyBill size={40} className="text-blue-500 mb-2" />
                        <span className="text-gray-700 font-medium">Kelola Gaji</span>
                    </Link>

                    <Link to="/attendance" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-100">
                        <FaCalendarCheck size={40} className="text-blue-500 mb-2" />
                        <span className="text-gray-700 font-medium">Presensi Online</span>
                    </Link>

                    <Link to="/grades" className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-100">
                        <FaBook size={40} className="text-blue-500 mb-2" />
                        <span className="text-gray-700 font-medium">Input Nilai</span>
                    </Link>
                </div>
            </main>
        </div>
    );
};  

export default Dashboard;