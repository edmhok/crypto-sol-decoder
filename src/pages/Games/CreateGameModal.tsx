import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import NFTSelectionModal from './NFTSelectionModal';

interface Game {
  id: string;
  name: string;
  image: string;
  description?: string;
}

interface NFT {
  id: string;
  name: string;
  image: string;
  collection: string;
}

interface CreateGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGameCreated: (gameData: any) => void;
}

const CreateGameModal: React.FC<CreateGameModalProps> = ({ isOpen, onClose, onGameCreated }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [gameTitle, setGameTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [isNFTModalOpen, setIsNFTModalOpen] = useState(false);
  
  // Step 3 - Game specification states
  const [numberOfPlayers, setNumberOfPlayers] = useState('10');
  const [privacy, setPrivacy] = useState('Public');
  const [spectatorMode, setSpectatorMode] = useState(true);
  const [whenToPlay, setWhenToPlay] = useState('Now');
  const [scheduledDate, setScheduledDate] = useState('');

  const games: Game[] = [
    {
      id: 'poker',
      name: 'Poker',
      image: '/images/games/poker.jpg',
      description: 'Classic card game'
    },
    {
      id: 'bingo',
      name: 'Bingo',
      image: '/images/games/bingo.jpg',
      description: 'Number matching game'
    },
    {
      id: 'agar',
      name: 'Agar',
      image: '/images/games/agar.jpg',
      description: 'Cell evolution game'
    },
    {
      id: 'game04',
      name: 'Game 04',
      image: '/images/games/game04.jpg',
      description: 'Strategy game'
    }
  ];

  const filteredGames = games.filter(game => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const steps = [
    { id: 1, name: 'Select game', completed: currentStep > 1 },
    { id: 2, name: 'Branding', completed: currentStep > 2 },
    { id: 3, name: 'General', completed: currentStep > 3 }
  ];

  const handleNext = () => {
    if (currentStep === 1 && selectedGame) {
      setGameTitle(selectedGame.name); // Pre-fill with selected game name
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate game title
      if (!gameTitle.trim()) {
        setTitleError('*Please enter a valid game name');
        return;
      }
      setTitleError('');
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Create game
      onGameCreated({
        game: selectedGame,
        name: gameTitle,
        nft: selectedNFT,
        createdAt: new Date()
      });
      onClose();
    }
  };

//   const handleNFTUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedNFT({
//         id: file.name,
//         name: file.name,
//         image: URL.createObjectURL(file),
//         collection: 'Uploaded'
//       });
//     }
//   };

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
  };

  const handleNFTSelect = (nft: NFT) => {
    setSelectedNFT(nft);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto"></div>
      <div className="bg-gray-800 rounded-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Create a game</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed 
                      ? 'bg-green-500 text-white' 
                      : currentStep === step.id 
                      ? 'bg-gray-600 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step.completed ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  <span className={`ml-2 text-sm ${
                    currentStep === step.id ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Select your game</h3>
              
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter game name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-lime-500 focus:outline-none"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Game Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {filteredGames.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => handleGameSelect(game)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      selectedGame?.id === game.id 
                        ? 'border-lime-500 ring-2 ring-lime-500 ring-opacity-50' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold mb-2">{game.name.charAt(0)}</div>
                        <div className="text-xs opacity-75">{game.name}</div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2">
                      <div className="text-sm font-semibold">{game.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">
                  Game Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={gameTitle}
                    onChange={(e) => {
                      setGameTitle(e.target.value);
                      if (titleError) setTitleError('');
                    }}
                    placeholder="Enter game title"
                    className={`w-full bg-gray-700 text-white px-4 py-3 rounded-lg border transition-colors ${
                      titleError ? 'border-red-500' : 'border-gray-600 focus:border-lime-500'
                    } focus:outline-none`}
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
                {titleError && (
                  <p className="text-red-500 text-sm mt-1">{titleError}</p>
                )}
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <button
                    onClick={() => setIsNFTModalOpen(true)}
                    className="flex flex-col items-center justify-center w-80 h-80 border-2 border-dashed border-gray-600 rounded-3xl cursor-pointer hover:border-gray-500 transition-colors bg-gray-800"
                  >
                    {selectedNFT ? (
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-4">
                          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                            <div className="w-20 h-20 bg-yellow-300 rounded-full relative">
                              <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
                              <div className="absolute top-3 right-3 w-2 h-2 bg-black rounded-full"></div>
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black rounded"></div>
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gray-700 rounded-t-lg"></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-white text-sm font-medium">{selectedNFT.name}</p>
                        <p className="text-gray-400 text-xs">Click to change</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full border-2 border-teal-400 flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <p className="text-white text-lg font-medium">Click to choose</p>
                        <p className="text-gray-400 text-sm">your NFT</p>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Game specification</h3>
              
              {/* Number of players */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-3">
                  Number of players
                </label>
                <div className="flex space-x-4">
                  {['10', '50', '200', '500'].map((count) => (
                    <label key={count} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="players"
                        value={count}
                        checked={numberOfPlayers === count}
                        onChange={(e) => setNumberOfPlayers(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${
                        numberOfPlayers === count 
                          ? 'border-white bg-white' 
                          : 'border-gray-500'
                      }`}>
                        {numberOfPlayers === count && (
                          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                        )}
                      </div>
                      <span className="text-white text-sm">{count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Privacy */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-3">
                  Privacy:
                </label>
                <div className="flex space-x-6">
                  {['Public', 'Private'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="privacy"
                        value={option}
                        checked={privacy === option}
                        onChange={(e) => setPrivacy(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${
                        privacy === option 
                          ? 'border-white bg-white' 
                          : 'border-gray-500'
                      }`}>
                        {privacy === option && (
                          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                        )}
                      </div>
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Spectator mode */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-3">
                  Spectator mode:
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setSpectatorMode(!spectatorMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      spectatorMode ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        spectatorMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className="ml-3 text-white text-sm">
                    {spectatorMode ? 'ON' : 'OFF'}
                  </span>
                </div>
              </div>

              {/* When to play */}
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-3">
                  When to play:
                </label>
                <div className="flex items-center space-x-6">
                  {['Now', 'Scheduled'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="whenToPlay"
                        value={option}
                        checked={whenToPlay === option}
                        onChange={(e) => setWhenToPlay(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${
                        whenToPlay === option 
                          ? 'border-white bg-white' 
                          : 'border-gray-500'
                      }`}>
                        {whenToPlay === option && (
                          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                        )}
                      </div>
                      <span className="text-white text-sm">{option}</span>
                    </label>
                  ))}
                  
                  {whenToPlay === 'Scheduled' && (
                    <div className="flex items-center ml-4">
                      <div className="relative">
                        <input
                          type="datetime-local"
                          value={scheduledDate}
                          onChange={(e) => setScheduledDate(e.target.value)}
                          className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-lime-500 focus:outline-none text-sm"
                          placeholder="Choose a date"
                        />
                        <Calendar className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        {/* Footer */}
        <div className="flex justify-end space-x-4 p-6 border-t border-gray-700">
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={currentStep === 1 && !selectedGame}
            className={`px-8 py-2 rounded-lg font-semibold transition-colors ${
              (currentStep === 1 && !selectedGame)
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-lime-500 hover:bg-lime-600 text-black'
            }`}
          >
            {currentStep === 3 ? 'Create' : 'Next'}
          </button>
        </div>
      </div>
    </div>
    {/* NFT Selection Modal */}
        <NFTSelectionModal
        isOpen={isNFTModalOpen}
        onClose={() => setIsNFTModalOpen(false)}
        onSelect={handleNFTSelect}
        />
    </div>
  );
}


export default CreateGameModal;

