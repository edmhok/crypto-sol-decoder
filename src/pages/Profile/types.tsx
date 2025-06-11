export interface ProfileData {
  displayName: string;
  bio: string;
  socialMediaLinks: {
    twitter?: string;
    discord?: string;
    instagram?: string;
    website?: string;
    linkedin?: string;
  };
  profileImage?: File | null;
  profileImageUrl?: string; // For storing uploaded image URL
}

export interface UserProfile extends ProfileData {
  id: string;
  walletAddress: string;
  createdAt: Date;
  updatedAt: Date;
  isComplete: boolean;
  isVerified: boolean;
  reputation: number;
  gamesPlayed: number;
  gamesWon: number;
  totalEarnings: number;
  preferredGames: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  unlockedAt: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface ProfileFormData {
  displayName: string;
  bio: string;
  twitter: string;
  discord: string;
  instagram: string;
  website: string;
  linkedin: string;
}

export interface ProfileValidationErrors {
  displayName?: string;
  bio?: string;
  twitter?: string;
  discord?: string;
  instagram?: string;
  website?: string;
  linkedin?: string;
  profileImage?: string;
}

export interface ProfileStats {
  gamesPlayed: number;
  gamesWon: number;
  winRate: number;
  totalEarnings: number;
  currentRank: string;
  reputation: number;
  joinDate: Date;
}