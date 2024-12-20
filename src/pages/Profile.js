import React, { useState, useEffect } from 'react';
import { FaUserEdit } from 'react-icons/fa';

function Profile() {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            setProfile(currentUser);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = () => {
        localStorage.setItem('currentUser', JSON.stringify(profile));
        alert('Profil berhasil diperbarui');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaUserEdit className="text-blue-500" />
                    Edit Profil 
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Nama</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name} 
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Telepon</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"    
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Alamat</label>
                        <textarea
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1">
                        </textarea>
                    </div>
                </div>
                <button
                    onClick={handleSave}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Simpan Perubahan
                </button>
            </div>
        </div>
    );
};

export default Profile;