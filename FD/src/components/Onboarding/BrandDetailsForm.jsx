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
    brandValues: [],
    targetAudience: "",
    uniqueSellingPoint: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [activeField, setActiveField] = useState(null);

  // ... (keep your existing constants)

  return (
    <div className="bg-white w-full max-w-4xl mx-auto px-5 py-12 sm:px-8 sm:py-16">
      {/* Increased vertical padding: py-12 (3rem) on mobile, py-16 (4rem) on desktop */}
      
      <div className="text-center mb-12">
        {/* Increased bottom margin */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Brand Profile
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Complete your brand details to connect with creators
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Increased vertical spacing between sections */}

        {/* Brand Information Section */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-gray-900 pb-3 border-b">
            Brand Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {/* Increased space between label and input */}
              <label className="block text-sm font-medium text-gray-700">
                Company Name *
              </label>
              <input
                type="text"
                required
                className="block w-full px-4 py-3.5 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                // ... other props
              />
            </div>

            {/* Repeat similar structure for other fields */}
          </div>
        </div>

        {/* Brand Identity Section */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-gray-900 pb-3 border-b">
            Brand Identity
          </h2>
          
          <div className="space-y-6">
            {/* Increased vertical spacing */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Brand Values
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Checkbox items with more spacing */}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button Section */}
        <div className="pt-10">
          {/* Increased top padding */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm"
          >
            {isLoading ? "Processing..." : "Complete Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandDetailsForm;