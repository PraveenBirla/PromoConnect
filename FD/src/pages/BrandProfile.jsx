import { useState } from "react";
import { 
  Building2, 
  Globe, 
  Users, 
  Target, 
  User, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Edit3, 
  Save, 
  X,
  Mail
} from "lucide-react";

const BrandProfilePage = () => {
  const [brandData, setBrandData] = useState({
    companyName: "TechFlow Solutions",
    website: "https://techflowsolutions.com",
    description: "AI-powered business automation solutions for enterprises.",
    industry: "Technology",
    companySize: "51-200 employees",
    budget: "$10,000 - $25,000",
    campaignGoals: "Brand awareness, lead generation, thought leadership in AI automation.",
    contactPerson: "Sarah Johnson",
    position: "Marketing Director",
    location: "San Francisco, CA"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(brandData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(brandData);
  };

  const handleSave = () => {
    setBrandData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(brandData);
    setIsEditing(false);
  };

  const ProfileCard = ({ icon: Icon, title, value, color = "blue", editable = false, field, type = "text" }) => (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-8 h-8 bg-${color}-100 rounded-lg flex items-center justify-center`}>
          <Icon className={`w-4 h-4 text-${color}-600`} />
        </div>
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
      </div>
      
      {isEditing && editable ? (
        type === "textarea" ? (
          <textarea
            value={editData[field]}
            onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-h-[60px] resize-none"
          />
        ) : (
          <input
            type={type}
            value={editData[field]}
            onChange={(e) => setEditData({ ...editData, [field]: e.target.value })}
            className="w-full p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        )
      ) : (
        <p className="text-gray-700 text-sm leading-relaxed">{value || "Not specified"}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{brandData.companyName}</h1>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mt-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {brandData.companySize}
                  </span>
                  <span>{brandData.industry}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
                  >
                    <Save className="w-3 h-3" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm"
                  >
                    <X className="w-3 h-3" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  <Edit3 className="w-3 h-3" />
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Company Info */}
          <div className="md:col-span-2">
            <ProfileCard
              icon={Briefcase}
              title="Description"
              value={brandData.description}
              color="blue"
              editable={true}
              field="description"
              type="textarea"
            />
          </div>
          
          <ProfileCard
            icon={Globe}
            title="Website"
            value={brandData.website}
            color="green"
            editable={true}
            field="website"
            type="url"
          />
          
          <ProfileCard
            icon={MapPin}
            title="Location"
            value={brandData.location}
            color="red"
            editable={true}
            field="location"
          />
          
          <ProfileCard
            icon={DollarSign}
            title="Budget"
            value={brandData.budget}
            color="purple"
            editable={true}
            field="budget"
          />
          
          <ProfileCard
            icon={Target}
            title="Goals"
            value={brandData.campaignGoals}
            color="orange"
            editable={true}
            field="campaignGoals"
            type="textarea"
          />
          
          <ProfileCard
            icon={User}
            title="Contact Person"
            value={brandData.contactPerson}
            color="indigo"
            editable={true}
            field="contactPerson"
          />
          
          <ProfileCard
            icon={Briefcase}
            title="Position"
            value={brandData.position}
            color="teal"
            editable={true}
            field="position"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-800 mb-3 text-sm">Quick Actions</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-md hover:bg-blue-100 transition-colors text-sm">
              <Mail className="w-3 h-3" />
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProfilePage;