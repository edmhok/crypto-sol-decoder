import React from 'react';
import { UserProfile, ProfileStats } from './types';

interface ProfileDataProps {
  profile: UserProfile;
  isOwnProfile?: boolean;
  onEdit?: () => void;
}

const ProfileData: React.FC<ProfileDataProps> = ({ 
  profile, 
  isOwnProfile = false, 
  onEdit 
}) => {
  const profileStats: ProfileStats = {
    gamesPlayed: profile.gamesPlayed,
    gamesWon: profile.gamesWon,
    winRate: profile.gamesPlayed > 0 ? (profile.gamesWon / profile.gamesPlayed) * 100 : 0,
    totalEarnings: profile.totalEarnings,
    currentRank: profile.reputation > 1000 ? 'Diamond' : profile.reputation > 500 ? 'Gold' : 'Silver',
    reputation: profile.reputation,
    joinDate: profile.createdAt
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };

  const formatEarnings = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white">
      {/* Profile Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center space-x-6">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
              {profile.profileImageUrl ? (
                <img 
                  src={profile.profileImageUrl} 
                  alt={profile.displayName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-3xl text-gray-400">
                  {profile.displayName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            {profile.isVerified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          {/* Profile Info */}
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold">{profile.displayName}</h1>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                profileStats.currentRank === 'Diamond' ? 'bg-blue-600' :
                profileStats.currentRank === 'Gold' ? 'bg-yellow-600' : 'bg-gray-600'
              }`}>
                {profileStats.currentRank}
              </span>
            </div>
            <p className="text-gray-400 text-sm font-mono mb-2">
              {profile.walletAddress.slice(0, 6)}...{profile.walletAddress.slice(-4)}
            </p>
            <p className="text-gray-300 mb-2">{profile.bio}</p>
            <p className="text-gray-500 text-sm">
              Joined {formatDate(profileStats.joinDate)}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        {isOwnProfile && onEdit && (
          <button
            onClick={onEdit}
            className="bg-lime-500 hover:bg-lime-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-lime-400">{profileStats.gamesPlayed}</div>
          <div className="text-gray-400 text-sm">Games Played</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-lime-400">{profileStats.gamesWon}</div>
          <div className="text-gray-400 text-sm">Games Won</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-lime-400">{profileStats.winRate.toFixed(1)}%</div>
          <div className="text-gray-400 text-sm">Win Rate</div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-lime-400">{formatEarnings(profileStats.totalEarnings)}</div>
          <div className="text-gray-400 text-sm">Total Earnings</div>
        </div>
      </div>

      {/* Social Media Links */}
      {(profile.socialMediaLinks.twitter || profile.socialMediaLinks.discord || 
        profile.socialMediaLinks.instagram || profile.socialMediaLinks.website) && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <div className="flex flex-wrap gap-3">
            {profile.socialMediaLinks.twitter && (
              <a
                href={`https://twitter.com/${profile.socialMediaLinks.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Twitter
              </a>
            )}
            {profile.socialMediaLinks.discord && (
              <div className="bg-indigo-500 px-3 py-2 rounded-lg text-sm font-medium">
                Discord: {profile.socialMediaLinks.discord}
              </div>
            )}
            {profile.socialMediaLinks.instagram && (
              <a
                href={`https://instagram.com/${profile.socialMediaLinks.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Instagram
              </a>
            )}
            {profile.socialMediaLinks.website && (
              <a
                href={profile.socialMediaLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Website
              </a>
            )}
          </div>
        </div>
      )}

      {/* Achievements */}
      {profile.achievements && profile.achievements.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {profile.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`bg-gray-700 rounded-lg p-3 text-center border-2 ${
                  achievement.rarity === 'legendary' ? 'border-yellow-400' :
                  achievement.rarity === 'epic' ? 'border-purple-400' :
                  achievement.rarity === 'rare' ? 'border-blue-400' : 'border-gray-600'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.iconUrl}</div>
                <div className="text-sm font-semibold">{achievement.title}</div>
                <div className="text-xs text-gray-400 mt-1">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Preferred Games */}
      {profile.preferredGames && profile.preferredGames.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Preferred Games</h3>
          <div className="flex flex-wrap gap-2">
            {profile.preferredGames.map((game, index) => (
              <span
                key={index}
                className="bg-lime-600 text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileData;