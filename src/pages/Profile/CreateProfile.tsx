import React, { useState } from 'react';
import { useWalletConnectModal } from '../../hooks/useWalletConnectModal';

interface CreateProfileProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (profileData: ProfileData) => void;
}

interface ProfileData {
  displayName: string;
  bio: string;
  socialMediaLinks: {
    twitter?: string;
    discord?: string;
    instagram?: string;
  };
  profileImage?: File | null;
}

const CreateProfile: React.FC<CreateProfileProps> = ({ isOpen, onClose, onComplete }) => {
  const { account } = useWalletConnectModal();
  const [formData, setFormData] = useState<ProfileData>({
    displayName: '',
    bio: '',
    socialMediaLinks: {},
    profileImage: null
  });
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSocialMediaChange = (platform: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      socialMediaLinks: {
        ...prev.socialMediaLinks,
        [platform]: value
      }
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, profileImage: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, profileImage: null }));
    setProfileImagePreview(null);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onComplete(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Complete profile</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            {/* Display Name */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                *Display name (required)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.displayName}
                  onChange={(e) => handleInputChange('displayName', e.target.value)}
                  placeholder="Enter game name"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-lime-500 focus:outline-none"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              {errors.displayName && (
                <p className="text-red-400 text-sm mt-1">{errors.displayName}</p>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Bio (optional)
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about yourself..."
                rows={4}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-lime-500 focus:outline-none resize-none"
              />
            </div>

            {/* Social Media Links */}
            <div>
              <label className="block text-white text-sm font-medium mb-4">
                Social media links (optional)
              </label>
              <div className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={formData.socialMediaLinks.twitter || ''}
                    onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                    placeholder="Twitter username"
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-lime-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={formData.socialMediaLinks.discord || ''}
                    onChange={(e) => handleSocialMediaChange('discord', e.target.value)}
                    placeholder="Discord username"
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-lime-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={formData.socialMediaLinks.instagram || ''}
                    onChange={(e) => handleSocialMediaChange('instagram', e.target.value)}
                    placeholder="Instagram username"
                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-lime-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex flex-col items-center">
            <label className="block text-white text-sm font-medium mb-4">
              Choose your profile image
            </label>
            
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center bg-gray-700 overflow-hidden">
                {profileImagePreview ? (
                  <img 
                    src={profileImagePreview} 
                    alt="Profile preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-4xl">
                    +
                  </div>
                )}
              </div>
              
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="profile-image-upload"
              />
            </div>
            
            <div className="mt-6 space-y-3">
              <label 
                htmlFor="profile-image-upload"
                className="block w-32 bg-transparent border-2 border-lime-500 text-lime-500 py-2 px-4 rounded-lg text-center cursor-pointer hover:bg-lime-500 hover:text-black transition-all duration-200"
              >
                Change
              </label>
              
              {profileImagePreview && (
                <button
                  onClick={removeImage}
                  className="block w-32 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Connected Wallet Info */}
        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
          <p className="text-gray-300 text-sm">
            Connected wallet: <span className="text-white font-mono">
              {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not connected'}
            </span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-2 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-400 transition-colors duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;