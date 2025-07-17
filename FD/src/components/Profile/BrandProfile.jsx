import React, { useState } from "react";
import { Edit3, Save, X, Building2, Globe, Users, MapPin, Target, User } from "lucide-react";

const BrandProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "TechCorp Inc",
    website: "https://techcorp.com",
    description:
      "Leading technology company focused on innovative solutions for modern businesses. We specialize in AI-powered tools and enterprise software.",
    industry: "Technology",
    companySize: "201-500 employees",
    campaignGoals:
      "Brand awareness and lead generation through content marketing and influencer partnerships",
    contactPerson: "Sarah Johnson",
    position: "Marketing Director",
    location: "San Francisco, CA",
  });

  const industries = [
    "Technology",
    "Fashion & Beauty",
    "Food & Beverage",
    "Health & Fitness",
    "Travel & Tourism",
    "Education",
    "Finance",
    "Entertainment",
    "Automotive",
    "Real Estate",
    "Other",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
      alert("Profile updated successfully!");
    }, 1500);
  };

  const handleCancel = () => {
    setIsEditing(false);
    alert("Changes cancelled");
  };

  const renderField = (label, value, key, required = false, type = "text", icon = null) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
        {icon}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {isEditing ? (
        <input
          type={type}
          value={formData[key]}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          required={required}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <div className="p-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
          {value}
        </div>
      )}
    </div>
  );

  const renderSelectField = (label, key, options, icon = null) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
        {icon}
        {label}
      </label>
      {isEditing ? (
        <select
          value={formData[key]}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <div className="p-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 border border-gray-200">
          {formData[key]}
        </div>
      )}
    </div>
  );

  const renderTextareaField = (label, key, minHeight = "100px", icon = null) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-800 flex items-center gap-2">
        {icon}
        {label}
      </label>
      {isEditing ? (
        <textarea
          value={formData[key]}
          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
          className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[${minHeight}] resize-none`}
        />
      ) : (
        <div className={`p-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 border border-gray-200 min-h-[${minHeight}]`}>
          {formData[key]}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 pt-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Brand Profile
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage your brand information and campaign details to create meaningful partnerships
          </p>
        </div>

        {/* Profile Overview Card */}
        <div className="overflow-hidden shadow-xl rounded-lg border-0 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="p-8 text-white">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{formData.companyName}</h2>
                    <p className="text-blue-100">{formData.position} • {formData.contactPerson}</p>
                  </div>
                </div>
                
                <p className="text-blue-50 leading-relaxed max-w-3xl">
                  {formData.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/20 text-white border-white/30 hover:bg-white/30">
                    <Globe className="w-3 h-3 mr-1" />
                    {formData.website}
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/20 text-white border-white/30 hover:bg-white/30">
                    <Building2 className="w-3 h-3 mr-1" />
                    {formData.industry}
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/20 text-white border-white/30 hover:bg-white/30">
                    <Users className="w-3 h-3 mr-1" />
                    {formData.companySize}
                  </span>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/20 text-white border-white/30 hover:bg-white/30">
                    <MapPin className="w-3 h-3 mr-1" />
                    {formData.location}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
              >
                {isEditing ? (
                  <>
                    <X className="w-4 h-4" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit3 className="w-4 h-4" />
                    Edit Profile
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="shadow-xl border-0 rounded-lg bg-white">
          <div className="bg-gray-50 border-b p-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-600" />
              Company Information
            </h3>
          </div>
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {renderField("Company Name", formData.companyName, "companyName", true, "text", <Building2 className="w-4 h-4 text-blue-600" />)}
                {renderField("Website", formData.website, "website", false, "url", <Globe className="w-4 h-4 text-blue-600" />)}
              </div>

              {renderTextareaField("Company Description", "description", "120px", <Building2 className="w-4 h-4 text-blue-600" />)}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {renderSelectField("Industry", "industry", industries, <Building2 className="w-4 h-4 text-blue-600" />)}
                {renderSelectField("Company Size", "companySize", companySizes, <Users className="w-4 h-4 text-blue-600" />)}
              </div>

              <div className="border-t my-8"></div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Contact Information
                </h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {renderField("Contact Person", formData.contactPerson, "contactPerson", true, "text", <User className="w-4 h-4 text-blue-600" />)}
                  {renderField("Position/Title", formData.position, "position", false, "text", <User className="w-4 h-4 text-blue-600" />)}
                  {renderField("Location", formData.location, "location", false, "text", <MapPin className="w-4 h-4 text-blue-600" />)}
                </div>
              </div>

              <div className="border-t my-8"></div>

              {/* Campaign Goals */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Campaign Goals
                </h4>
                {renderTextareaField("Campaign Goals & Objectives", "campaignGoals", "100px", <Target className="w-4 h-4 text-blue-600" />)}
              </div>

              {isEditing && (
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-semibold"
                  >
                    <X className="w-4 h-4" />
                    Cancel
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
