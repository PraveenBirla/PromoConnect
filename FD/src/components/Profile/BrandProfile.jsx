// Ensure you have these packages:
// npm install react-hot-toast lucide-react

import React, { useState, useEffect, useCallback } from "react";
import { Toaster, toast } from 'react-hot-toast';
import {
    Building, Globe, Users, MapPin, User, Loader2, AlertTriangle, Edit, Check, X, Image as ImageIcon
} from "lucide-react";

// --- Skeleton Loader for a Compact Layout ---
const ProfileSkeleton = () => (
    <div className="w-full max-w-4xl mx-auto animate-pulse">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                    <div>
                        <div className="h-7 w-48 bg-gray-300 rounded-md"></div>
                        <div className="h-4 w-32 bg-gray-200 rounded-md mt-2"></div>
                    </div>
                </div>
                <div className="w-28 h-10 bg-gray-300 rounded-lg"></div>
            </div>
            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                        <div className="h-8 w-full bg-gray-300 rounded-md"></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


// --- Reusable Field Component (for display or input) ---
const ProfileField = ({ label, name, value, Icon, isEditing, onChange, type = "text" }) => (
    <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-500 flex items-center mb-1">
            <Icon className="w-4 h-4 mr-2 text-gray-400" />
            {label}
        </label>
        {isEditing ? (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 text-base text-gray-800 bg-gray-100 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 focus:bg-white transition"
            />
        ) : (
            <p className="text-base font-semibold text-gray-800 truncate min-h-[40px] flex items-center">
                {value || "-"}
            </p>
        )}
    </div>
);


// --- Main Brand Profile Component ---
const BrandProfile = () => {
    const [profile, setProfile] = useState(null);
    const [originalProfile, setOriginalProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState(null);

    // Fetch initial data
    useEffect(() => {
        const fetchBrandDetails = async () => {
            setIsLoading(true);
            try { 
                const token = localStorage.getItem("token");
                if (!token) throw new Error("Authentication token not found.");

                const response = await fetch('http://localhost:8086/user/getbrandDetails', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                if (!response.ok) {
                    if (response.status === 404) throw new Error("No profile found. Please create one first.");
                    throw new Error("Could not load your profile.");
                }

                const data = await response.json();
                setProfile(data);
                setOriginalProfile(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBrandDetails();
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setIsSaving(true);
        const toastId = toast.loading("Saving profile...");
        try {
            const token = localStorage.getItem("token");
            const response = await fetch('http://localhost:8086/user/brandDetails', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profile),
            });

            if (!response.ok) throw new Error("Failed to save changes.");

            const updatedData = await response.json();
            setProfile(updatedData);
            setOriginalProfile(updatedData);
            setIsEditing(false);
            toast.success("Profile updated successfully!", { id: toastId });
        } catch (err) {
            toast.error(err.message, { id: toastId });
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setProfile(originalProfile);
        setIsEditing(false);
        toast("Changes discarded.");
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <ProfileSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center text-center p-4">
                <div className="bg-white p-10 rounded-lg shadow-sm">
                    <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">An Error Occurred</h2>
                    <p className="text-gray-600 mt-2">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-200 min-h-screen  bg-gray-50  flex items-center justify-center p-4 font-sans">
            <Toaster position="top-right" />
            <div className=" bg-gray-50 w-full max-w-4xl">
                <div className=" p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
                    
                    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-gray-200">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{profile.companyName}</h1>
                                <p className="text-gray-500">{profile.industry}</p>
                            </div>
                        </div>
                        {!isEditing && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="mt-4 sm:mt-0 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-100 transition-colors"
                            >
                                <Edit className="w-4 h-4" /> Edit Profile
                            </button>
                        )}
                    </header>

                    {/* --- Profile Details Grid --- */}
                    <main className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <ProfileField label="Company Name" name="companyName" value={profile.companyName} Icon={Building} isEditing={isEditing} onChange={handleChange} />
                        <ProfileField label="Website" name="website" value={profile.website} Icon={Globe} isEditing={isEditing} onChange={handleChange} type="url" />
                        <ProfileField label="Company Size" name="companySize" value={profile.companySize} Icon={Users} isEditing={isEditing} onChange={handleChange} />
                        <ProfileField label="Location" name="location" value={profile.location} Icon={MapPin} isEditing={isEditing} onChange={handleChange} />
                        <ProfileField label="Contact Person" name="contactPerson" value={profile.contactPerson} Icon={User} isEditing={isEditing} onChange={handleChange} />
                        <ProfileField label="Position" name="position" value={profile.position} Icon={User} isEditing={isEditing} onChange={handleChange} />
                        
                        {/* Description field spanning two columns */}
                        <div className="md:col-span-2">
                             <label className="text-sm font-medium text-gray-500 flex items-center mb-1">
                                <Building className="w-4 h-4 mr-2 text-gray-400" />
                                Brand Description
                            </label>
                            {isEditing ? (
                                <textarea
                                    name="description"
                                    value={profile.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 text-base text-gray-800 bg-gray-100 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-800 focus:bg-white transition"
                                />
                            ) : (
                                <p className="text-base text-gray-700 whitespace-pre-wrap">
                                    {profile.description || "-"}
                                </p>
                            )}
                        </div>
                    </main>

                    {/* --- Action Buttons --- */}
                    {isEditing && (
                        <footer className="flex items-center justify-end gap-3 pt-8 mt-8 border-t border-gray-200">
                            <button onClick={handleCancel} className="px-4 py-2 bg-white text-gray-800 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-100 transition-colors">
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="px-4 py-2 flex items-center gap-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-black transition-colors disabled:bg-gray-400"
                            >
                                {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                                Save Changes
                            </button>
                        </footer>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandProfile;
