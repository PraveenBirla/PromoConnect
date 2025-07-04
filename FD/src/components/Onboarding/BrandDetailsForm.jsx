import { useState } from "react";

const BrandDetailsForm = ({ onComplete, onSkip }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    description: "",
    industry: "",
    companySize: "",
    contactPerson: "",
    position: "",
    location: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const industries = [
    "Technology", "Fashion & Beauty", "Food & Beverage", "Health & Fitness",
    "Travel & Tourism", "Education", "Finance", "Entertainment", "Automotive",
    "Real Estate", "Other"
  ];

  const companySizes = [
    "1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Saving company details:", formData);
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border w-full max-w-4xl mx-auto px-4 py-6 sm:px-6 sm:py-8 space-y-6 transition-all">
      <div className="text-center space-y-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">Company Profile</h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base">Tell us about your company</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-sm sm:text-base">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label className="font-medium">Company Name *</label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              placeholder="Your company name"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-medium">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              placeholder="https://yourcompany.com"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-medium">Company Description *</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="p-2 sm:p-3 border rounded-md min-h-[100px] focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
            placeholder="What does your company do?"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label className="font-medium">Industry *</label>
            <select
              required
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
            >
              <option value="">Select industry</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-medium">Company Size</label>
            <select
              value={formData.companySize}
              onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
              className="p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
            >
              <option value="">Select size</option>
              {companySizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label className="font-medium">Contact Person *</label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className="p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              placeholder="Full name"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-medium">Position/Title</label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              placeholder="Marketing Manager, CEO, etc."
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-medium">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
            placeholder="City, Country"
          />
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-blue-700 transition-all disabled:opacity-60"
          >
            {isLoading ? "Saving..." : "Submit Details"}
          </button>

          <button
            type="button"
            onClick={onSkip}
            className="border border-gray-300 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-gray-50 transition-all"
          >
            Skip for Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandDetailsForm;
