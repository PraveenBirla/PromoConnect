// First, install a modern notification library for better UX
// npm install react-hot-toast

import React, { useState, useEffect } from "react";
import { Toaster, toast } from 'react-hot-toast';
import { Edit3, Save, X, Building2, Globe, Users, MapPin, User, Loader2, AlertTriangle } from "lucide-react";

// Skeleton Component for a better loading experience
const ProfileSkeleton = () => (
  <div className="max-w-6xl mx-auto space-y-8 animate-pulse">
    <div className="text-center space-y-2 pt-8">
      <div className="h-10 bg-gray-300 rounded-md w-1/3 mx-auto"></div>
      <div className="h-4 bg-gray-300 rounded-md w-2/3 mx-auto mt-2"></div>
    </div>
    <div className="overflow-hidden rounded-lg bg-gray-400 h-48"></div>
    <div className="shadow-xl border-0 rounded-lg bg-white p-8 space-y-8">
        <div className="h-8 bg-gray-300 rounded-md w-1/4"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-10 bg-gray-200 rounded-md"></div>
            <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>
        <div className="h-24 bg-gray-200 rounded-md"></div>
    </div>
  </div>
);


const BrandProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // True on initial load
  const [isSaving, setIsSaving] = useState(false);  // For the save button
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState(null);
  const [originalData, setOriginalData] = useState(null); // To store original state for cancellation

  useEffect(() => {
    const fetchBrandDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Authentication failed. Please log in again.");
        
        // This is where you fetch the user's existing brand data
        const response = await fetch('http://localhost:8086/user/brandDetails', {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!response.ok) {
           if(response.status === 404) throw new Error("No profile found. Please create your brand profile.");
           throw new Error("Failed to load your profile data.");
        }
        
        const data = await response.json();
        // The API returns the fields from your form, but not 'campaignGoals'
        setFormData(data);
        setOriginalData(data); // Set the pristine data for the cancel action
        
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrandDetails();
  }, []); // Empty array means this runs once on component mount

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
        const token = localStorage.getItem("token");
        const response = await fetch('http://localhost:8086/user/brandDetails', {
            method: 'PUT', // Use PUT to update the entire resource
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Failed to save changes. Please try again.");

        const updatedData = await response.json();
        setFormData(updatedData);
        setOriginalData(updatedData); // The new "original" is the saved data
        setIsEditing(false);
        toast.success("Profile updated successfully!");

    } catch (err) {
        toast.error(err.message);
    } finally {
        setIsSaving(false);
    }
  };
  
  const handleCancel = () => {
    setFormData(originalData); // Revert all changes
    setIsEditing(false);
    toast("Changes discarded.");
  };

  const toggleEditMode = () => {
    if (isEditing) {
        handleCancel();
    } else {
        setIsEditing(true);
    }
  }

  // --- Render Functions ---
  const renderField = (label, key, icon, options = {}) => {
    const { required = false, type = "text" } = options;
    return (
        <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">{icon} {label} {required && <span className="text-red-500">*</span>}</label>
            {isEditing ? (
                <input type={type} name={key} value={formData[key] || ''} onChange={handleChange} required={required} className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 border border-gray-200 min-h-[40px] flex items-center">{formData[key]}</div>
            )}
        </div>
    );
  };
  // Add other render functions (select, textarea) if needed, following the same pattern.

  if (isLoading) {
    return (
        <div className="min-h-screen bg-white p-4">
            <Toaster position="top-right" />
            <ProfileSkeleton />
        </div>
    );
  }

  if (error || !formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-center p-4">
        <Toaster position="top-right" />
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">An Error Occurred</h2>
          <p className="text-gray-600 mt-2">{error}</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 pt-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Brand Profile
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Manage your brand information to create meaningful partnerships.
            </p>
        </div>

        {/* Profile Overview Card */}
        <div className="overflow-hidden shadow-xl rounded-lg border-0 bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="p-8 text-white">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><Building2 className="w-6 h-6" /></div>
                            <div>
                                <h2 className="text-3xl font-bold">{formData.companyName}</h2>
                                <p className="text-blue-100">{formData.position} • {formData.contactPerson}</p>
                            </div>
                        </div>
                        <p className="text-blue-50 leading-relaxed max-w-3xl">{formData.description}</p>
                        <div className="flex flex-wrap gap-3">
                            {/* Dynamically shown tags */}
                            <span className="tag"><Globe className="w-3 h-3 mr-1" />{formData.website}</span>
                            <span className="tag"><Building2 className="w-3 h-3 mr-1" />{formData.industry}</span>
                            <span className="tag"><Users className="w-3 h-3 mr-1" />{formData.companySize}</span>
                            <span className="tag"><MapPin className="w-3 h-3 mr-1" />{formData.location}</span>
                        </div>
                    </div>
                    <button onClick={toggleEditMode} className="edit-button">
                        {isEditing ? <><X className="w-4 h-4" />Cancel</> : <><Edit3 className="w-4 h-4" />Edit Profile</>}
                    </button>
                </div>
            </div>
        </div>

        {/* Profile Form */}
        <div className="shadow-xl border-0 rounded-lg bg-white">
            <div className="bg-gray-50 border-b p-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><Building2 className="w-6 h-6 text-blue-600" /> Company Information</h3>
            </div>
            <div className="p-8">
                <form onSubmit={handleSave} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {renderField("Company Name", "companyName", <Building2 className="w-4 h-4 text-blue-600" />, { required: true })}
                        {renderField("Website", "website", <Globe className="w-4 h-4 text-blue-600" />, { type: 'url' })}
                    </div>

                    {/* ... other fields like description, industry, companySize, contactPerson, etc. */}
                    {/* Make sure to use the renderField function for consistency */}

                    {isEditing && (
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                            <button type="submit" disabled={isSaving} className="save-button">
                                {isSaving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Changes</>}
                            </button>
                            <button type="button" onClick={handleCancel} className="cancel-button">
                                <X className="w-4 h-4" /> Cancel
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProfile;