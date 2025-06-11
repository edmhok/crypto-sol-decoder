import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useWalletConnectModal } from '../../hooks/useWalletConnectModal';
import { useProfileCreation } from '../../hooks/useProfileCreation';
import ProfileData from './ProfileData';
import CreateProfile from './CreateProfile';
import { UserProfile as UserProfileType } from './types';
import PageMeta from '../../components/common/PageMeta';

const UserProfile: React.FC = () => {
  const { walletAddress } = useParams<{ walletAddress: string }>();
  const navigate = useNavigate();
  const { account, isConnected } = useWalletConnectModal();
  const { userProfile, openProfileModal, isProfileModalOpen, closeProfileModal, handleProfileComplete } = useProfileCreation();
  const [profileData, setProfileData] = useState<UserProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isOwnProfile = account && walletAddress === account;

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        if (isOwnProfile && userProfile) {
          // Use the current user's profile from the hook
          setProfileData({
            id: userProfile.walletAddress, // Use walletAddress as id since hook doesn't have id
            walletAddress: userProfile.walletAddress,
            displayName: userProfile.displayName,
            bio: userProfile.bio || '',
            socialMediaLinks: userProfile.socialMediaLinks || {}, // Use socialMediaLinks from hook
            profileImageUrl: userProfile.profileImage ? URL.createObjectURL(userProfile.profileImage) : '',
            createdAt: userProfile.createdAt,
            updatedAt: new Date(), // Set current date as updated
            isComplete: userProfile.isComplete,
            isVerified: false, // Default value
            reputation: 0, // Default value
            gamesPlayed: 0, // Default value
            gamesWon: 0, // Default value
            totalEarnings: 0, // Default value
            preferredGames: [], // Default value
            achievements: [] // Default value
          });
        } else if (walletAddress) {
          // Load profile from localStorage (in a real app, this would be an API call)
          const savedProfile = localStorage.getItem(`profile_${walletAddress}`);
          if (savedProfile) {
            const profile = JSON.parse(savedProfile);
            setProfileData(profile);
          } else {
            setError('Profile not found');
          }
        } else {
          setError('Invalid wallet address');
        }
      } catch (err) {
        setError('Failed to load profile');
        console.error('Error loading profile:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [walletAddress, isOwnProfile, userProfile]);

  const handleEditProfile = () => {
    if (isOwnProfile) {
      openProfileModal();
    }
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading profile...</div>
      </div>
    );
  }

  if (error || !profileData) {
    return (
      <>
        <PageMeta
          title="Profile Not Found | Crypto Oasis"
          description="The requested profile could not be found"
        />
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-xl mb-4">{error || 'Profile not found'}</div>
            <button
              onClick={handleBackToDashboard}
              className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageMeta
        title={`${profileData.displayName} | Crypto Oasis`}
        description={`View ${profileData.displayName}'s gaming profile on Crypto Oasis`}
      />
      
      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBackToDashboard}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-white">
                {isOwnProfile ? 'My Profile' : `${profileData.displayName}'s Profile`}
              </h1>
            </div>
            
            {isConnected && (
              <div className="text-sm text-gray-400">
                Connected: {account?.slice(0, 6)}...{account?.slice(-4)}
              </div>
            )}
          </div>
        </div>

        {/* Profile Content */}
        <div className="container mx-auto px-6 py-8">
          <ProfileData 
            profile={profileData}
            isOwnProfile={isOwnProfile || false}
            onEdit={handleEditProfile}
          />
        </div>

        {/* Profile Edit Modal */}
        {isOwnProfile && (
          <CreateProfile
            isOpen={isProfileModalOpen}
            onClose={closeProfileModal}
            onComplete={handleProfileComplete}
          />
        )}
      </div>
    </>
  );
};

export default UserProfile;