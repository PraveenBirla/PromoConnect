import { useState } from "react";

const BrandDetailsForm = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    description: "",
    industry: "",
    companySize: "",
    contactPerson: "",
    position: "",
    email: "",
    location: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Optional: for displaying errors

  const industryOptions = [
    "Technology", "Fashion", "Food & Beverage", "Health & Wellness",
    "Beauty", "Automotive", "Finance", "Education", "Travel", "Retail",
    "Entertainment", "Arts & Culture", "Non-profit", "Other"
  ];

  const companySizeOptions = [
    "1-10 employees", "11-50 employees", "51-200 employees",
    "201-500 employees", "501-1000 employees", "1000+ employees"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // 1. Retrieve the auth token from localStorage
      // IMPORTANT: Replace 'yourAuthTokenKey' with the actual key you use to store the token.
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Authentication error: No token found. Please log in again.");
        setIsLoading(false);
        alert("Authentication error: You are not logged in.");
        return;
      }

      // 2. Make the POST request using the fetch() API
      const response = await fetch('http://localhost:8086/user/brandDetails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // Important: specify the content type
        },
        body: JSON.stringify(formData), // Manually stringify the form data object
      });  

      // 3. Check if the response was successful (status code 200-299)
      if (!response.ok) {
        // If not OK, try to parse the error response from the server
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        throw new Error(errorData.message || 'An unknown error occurred');
      }
      
      // 4. Handle the successful response
      const result = await response.json(); // Parse the JSON from the successful response
      console.log("API Response:", result);
      
      alert("Brand Profile Submitted Successfully!");
      if (onComplete) onComplete(formData);

    } catch (err) {
      // 5. Handle errors (network errors or errors thrown from the check above)
      console.error("Failed to submit brand details:", err);
      setError(err.message);
      alert(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-white w-full max-w-2xl mx-auto px-4 py-6 sm:px-6 sm:py-10 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Complete Your Brand Profile
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Help us understand your brand better to connect you with the perfect creators.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Brand Information Section */}
        <div className="space-y-6 p-4 border border-gray-200 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">
            Brand Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input type="text" id="companyName" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., InnovateTech" />
            </div>
            
            {/* Website */}
            <div className="space-y-2">
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Website <span className="text-red-500">*</span>
              </label>
              <input type="url" id="website" name="website" required value={formData.website} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="https://yourcompany.com" />
            </div>

            {/* Brand Description */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Brand Description <span className="text-red-500">*</span>
              </label>
              <textarea id="description" name="description" required value={formData.description} onChange={handleChange} rows="3" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your brand"></textarea>
            </div>

            {/* Industry */}
            <div className="space-y-2">
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry <span className="text-red-500">*</span>
              </label>
              <select id="industry" name="industry" required value={formData.industry} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select industry</option>
                {industryOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>

            {/* Company Size */}
            <div className="space-y-2">
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                Company Size <span className="text-red-500">*</span>
              </label>
              <select id="companySize" name="companySize" required value={formData.companySize} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select size</option>
                {companySizeOptions.map(option => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Contact Person Section */}
        <div className="space-y-6 p-4 border border-gray-200 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">
            Contact Person Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Name */}
            <div className="space-y-2">
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                Contact Name <span className="text-red-500">*</span>
              </label>
              <input type="text" id="contactPerson" name="contactPerson" required value={formData.contactPerson} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Jane Doe" />
            </div>

            {/* Position */}
            <div className="space-y-2">
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position <span className="text-red-500">*</span>
              </label>
              <input type="text" id="position" name="position" required value={formData.position} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Marketing Head" />
            </div>

            {/* Email */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., jane@company.com" />
            </div>

            {/* Location */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location <span className="text-red-500">*</span>
              </label>
              <input type="text" id="location" name="location" required value={formData.location} onChange={handleChange} className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Delhi, India" />
            </div>
          </div>
        </div>
        
        {/* Error Display */}
        {error && (
          <div className="text-center text-red-600 bg-red-100 p-3 rounded-md">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-6 flex justify-center">
          <button
            type="submit"
            className={`w-full max-w-sm py-3 px-4 rounded-md shadow text-white font-medium text-base transition
              ${isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Submit Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandDetailsForm;