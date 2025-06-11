import { useState } from "react";

const BrandDetailsForm = ({ onComplete, onSkip }) => { 
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    description: "",
    industry: "",
    companySize: "",
    budget: "",
    campaignGoals: "",
    contactPerson: "",
    position: "",
    phone: "",
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

  const budgetRanges = [
    "$500 - $1,000", "$1,000 - $5,000", "$5,000 - $10,000",
    "$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Saving brand details:", formData);
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold">Brand Profile Setup</h2>
        <p className="text-gray-500">Tell us about your company and marketing goals</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-medium">Company Name *</label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Your company name"
            />
          </div>
          <div className="space-y-1">
            <label className="font-medium">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="https://yourcompany.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-medium">Company Description *</label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 border rounded-md min-h-[100px]"
            placeholder="Tell us about your company, products, and services..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-medium">Industry *</label>
            <select
              required
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select your industry</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-medium">Company Size</label>
            <select
              value={formData.companySize}
              onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select company size</option>
              {companySizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="font-medium">Marketing Budget per Campaign</label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="font-medium">Campaign Goals</label>
          <textarea
            value={formData.campaignGoals}
            onChange={(e) => setFormData({ ...formData, campaignGoals: e.target.value })}
            className="w-full p-2 border rounded-md min-h-[80px]"
            placeholder="Brand awareness, sales, engagement, etc."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-medium">Contact Person *</label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Full name"
            />
          </div>
          <div className="space-y-1">
            <label className="font-medium">Position/Title</label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="Marketing Manager, CEO, etc."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="font-medium">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div className="space-y-1">
            <label className="font-medium">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="City, Country"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-60"
            disabled={isLoading}
          >
            {isLoading ? "Setting up your profile..." : "Complete Profile Setup"}
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="w-full border border-gray-300 p-2 rounded-md hover:bg-gray-100"
          >
            Skip for Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandDetailsForm;
