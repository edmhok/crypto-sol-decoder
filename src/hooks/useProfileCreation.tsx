import { useState, useEffect } from 'react';
import { useWalletConnectModal } from './useWalletConnectModal';

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

interface UserProfile extends ProfileData {
  walletAddress: string;
  createdAt: Date;
  isComplete: boolean;
}

export const useProfileCreation = () => {
  const { isConnected, account } = useWalletConnectModal();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false);

  // Check if user has completed profile setup
  useEffect(() => {
    if (isConnected && account) {
      // Check localStorage for existing profile
      const savedProfile = localStorage.getItem(`profile_${account}`);
      if (savedProfile) {
        const profile = JSON.parse(savedProfile);
        setUserProfile(profile);
        setHasCompletedProfile(profile.isComplete);
      } else {
        // Show profile creation modal for new users
        setIsProfileModalOpen(true);
      }
    }
  }, [isConnected, account]);

  const handleProfileComplete = (profileData: ProfileData) => {
    if (!account) return;

    const newProfile: UserProfile = {
      ...profileData,
      walletAddress: account,
      createdAt: new Date(),
      isComplete: true
    };

    // Save to localStorage (in a real app, this would be saved to a backend)
    localStorage.setItem(`profile_${account}`, JSON.stringify(newProfile));
    
    setUserProfile(newProfile);
    setHasCompletedProfile(true);
    setIsProfileModalOpen(false);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setIsProfileModalOpen(false);
  };

  const updateProfile = (updates: Partial<ProfileData>) => {
    if (!userProfile || !account) return;

    const updatedProfile = {
      ...userProfile,
      ...updates
    };

    localStorage.setItem(`profile_${account}`, JSON.stringify(updatedProfile));
    setUserProfile(updatedProfile);
  };

  const resetProfile = () => {
    if (account) {
      localStorage.removeItem(`profile_${account}`);
    }
    setUserProfile(null);
    setHasCompletedProfile(false);
  };

  return {
    isProfileModalOpen,
    userProfile,
    hasCompletedProfile,
    openProfileModal,
    closeProfileModal,
    handleProfileComplete,
    updateProfile,
    resetProfile
  };
};