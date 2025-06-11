import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

interface NFT {
  id: string;
  name: string;
  image: string;
  collection: string;
}

interface NFTSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (nft: NFT) => void;
}

const NFTSelectionModal: React.FC<NFTSelectionModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  // Mock NFT data - in real app, this would come from an API
  const nfts: NFT[] = [
    {
      id: '1',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-1.jpg',
      collection: 'Elderly Ape Retirement Club'
    },
    {
      id: '2',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-2.jpg',
      collection: 'Elderly Ape Retirement Club'
    },
    {
      id: '3',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-3.jpg',
      collection: 'Elderly Ape Retirement Club'
    },
    {
      id: '4',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-4.jpg',
      collection: 'Elderly Ape Retirement Club'
    },
    {
      id: '5',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-5.jpg',
      collection: 'Elderly Ape Retirement Club'
    },
    {
      id: '6',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-6.jpg',
      collection: 'Elderly Ape Retirement Club'
    },
    {
      id: '7',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-7.jpg',
      collection: 'Elderly Ape Retirement Club'
    },
    {
      id: '8',
      name: 'Elderly Ape Retire... #4243',
      image: '/images/nft/ape-8.jpg',
      collection: 'Elderly Ape Retirement Club'
    }
  ];

  const filteredNFTs = nfts.filter(nft => 
    nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nft.collection.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (selectedNFT) {
      onSelect(selectedNFT);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Choose your profile image</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* NFT name search */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              NFT name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-lime-500 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {filteredNFTs.map((nft) => (
              <div
                key={nft.id}
                onClick={() => setSelectedNFT(nft)}
                className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  selectedNFT?.id === nft.id 
                    ? 'border-lime-500 ring-2 ring-lime-500 ring-opacity-50' 
                    : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                {/* NFT Image */}
                <div className="aspect-square bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center relative">
                  {/* Placeholder for NFT character */}
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow-300 rounded-full relative">
                      {/* Simple ape face representation */}
                      <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-3 right-3 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black rounded"></div>
                      {/* Hat */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gray-700 rounded-t-lg"></div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Selection indicator */}
                  {selectedNFT?.id === nft.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* NFT Info */}
                <div className="p-3 bg-gray-900">
                  <div className="text-white text-sm font-medium truncate">{nft.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-700">
          <button
            onClick={handleSave}
            disabled={!selectedNFT}
            className={`px-8 py-2 rounded-lg font-semibold transition-colors ${
              !selectedNFT
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-lime-500 hover:bg-lime-600 text-black'
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTSelectionModal;