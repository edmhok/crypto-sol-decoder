import PageMeta from '../../components/common/PageMeta';
import { useWalletConnectModal } from '../../hooks/useWalletConnectModal';
import { CreateGameModal } from '../Games';
import { useState } from 'react';

export default function Home() {
  const { account, balance, disconnectWallet } = useWalletConnectModal();
  
  // State for managing the create game modal
  const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
  
  // Handler for game creation
  const handleGameCreated = (gameData: any) => {
    console.log('Game created:', gameData);
    setIsCreateGameModalOpen(false);
    // Handle the created game data (save to state, API call, etc.)
  };

  const featuredGames = [
    {
      id: 1,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "EARC",
      players: "5/20",
      image: "/images/game1.jpg",
      color: "from-purple-600 to-purple-800",
      icon: "🐨"
    },
    {
      id: 2,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "EARC",
      players: "5/20",
      image: "/images/game2.jpg",
      color: "from-green-600 to-green-800",
      icon: "🦖"
    },
    {
      id: 3,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "EARC",
      players: "5/20",
      image: "/images/game3.jpg",
      color: "from-pink-600 to-pink-800",
      icon: "🐱"
    },
    {
      id: 4,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "EARC",
      players: "5/20",
      image: "/images/game4.jpg",
      color: "from-cyan-600 to-cyan-800",
      icon: "👤"
    },
    {
      id: 5,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "EARC",
      players: "5/20",
      image: "/images/game5.jpg",
      color: "from-green-400 to-green-600",
      icon: "🥤"
    },
    {
      id: 6,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "Lazy Lions",
      players: "5/20",
      image: "/images/game6.jpg",
      color: "from-orange-600 to-orange-800",
      icon: "🦁"
    },
    {
      id: 7,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "EARC",
      players: "5/20",
      image: "/images/game7.jpg",
      color: "from-purple-400 to-purple-600",
      icon: "🐵"
    },
    {
      id: 8,
      title: "Alpha Competition #1",
      host: "Nihilc",
      collection: "Alpha Ei...",
      players: "5/20",
      image: "/images/game8.jpg",
      color: "from-gray-600 to-gray-800",
      icon: "👤"
    }
  ];

  return (
    <>
      <PageMeta
        title="Crypto Oasis Dashboard | Gaming Platform"
        description="Access your gaming dashboard with featured games and competitions"
      />
      
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-cyan-400">CRYPTO OASIS</div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>🔍</span>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-gray-700 text-white px-3 py-1 rounded border-none outline-none"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsCreateGameModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
              >
                Create a game
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  👤
                </div>
                <div className="text-sm">
                  <div className="text-gray-300">{account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Not Connected'}</div>
                  <div className="text-gray-500 text-xs">{balance ? `${parseFloat(balance).toFixed(4)} ETH` : ''}</div>
                </div>
                <button 
                  onClick={disconnectWallet}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex">
          {/* <div className="w-16 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 space-y-4"> */}
            

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-8 mb-8 relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-4xl font-bold mb-2">Adidas Poker Night #1</h1>
                <p className="text-purple-200 mb-6">
                  Crypto Oasis is a multigaming platform for NFT<br />
                  communities to come together, compete, and have fun.
                </p>
                <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-300">
                  Play Now
                </button>
              </div>
              <div className="absolute right-8 top-4 text-8xl opacity-80">
                🐵
              </div>
            </div>

            {/* Featured Games Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Featured games</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredGames.map((game) => (
                  <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-200">
                    <div className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center relative`}>
                      <div className="text-4xl">{game.icon}</div>
                      <div className="absolute top-2 left-2 bg-cyan-400 text-black text-xs px-2 py-1 rounded font-bold">
                        C+
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{game.title}</h3>
                      
                      <div className="space-y-1 text-sm text-gray-400 mb-4">
                        <div className="flex justify-between">
                          <span>HOST:</span>
                          <span className="text-white">{game.host}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>COLLECTION:</span>
                          <span className="text-white">{game.collection}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>PLAYERS:</span>
                          <span className="text-white">{game.players}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded font-medium">
                        Play
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <button className="text-gray-400 hover:text-white">
                  Show more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Game Modal */}
      <CreateGameModal
        isOpen={isCreateGameModalOpen}
        onClose={() => setIsCreateGameModalOpen(false)}
        onGameCreated={handleGameCreated}
      />
    </>
  );
}
   
  



