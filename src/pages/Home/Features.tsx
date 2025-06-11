import { Link } from 'react-router-dom';
import feature1 from '../../assets/featur1.png';
import feature2 from '../../assets/feature2.png';

export default function Features() {


  return (
    <>
        {/* Main Content */}
        <div className="relative z-10">
          {/* Header Section */}
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-6xl font-bold text-white mb-6">
              FEATURES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the unique features that make our platform the ultimate destination for NFT gaming communities.
            </p>
          </div>

          {/* Feature Section 2 */}
          <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative">
                  <img 
                    src={feature2} 
                    alt="Tournament Features" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="order-2">
                <h2 className="text-5xl font-bold text-white mb-6">
                  Tournaments
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-200">
                    for everyone!
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Whatever your objective, our tournaments are created for you to enjoy and progress in, 
                  no matter your skill or experience.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>

          {/* Feature Section 1 */}
          <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={feature1} 
                    alt="Gaming Platform Feature" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="order-2 lg:order-1">
                <h2 className="text-5xl font-bold text-white mb-6">
                  Make your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-200">
                    game unique!
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Crypto Oasis is a multigaming platform for NFT communities to come together, 
                  compete, and have fun.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of gaming with cutting-edge features designed for the NFT community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Unique Gaming</h3>
                <p className="text-gray-400 leading-relaxed">Customize your experience with NFT assets and personalized gameplay that adapts to your style.</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Community Driven</h3>
                <p className="text-gray-400 leading-relaxed">Join a vibrant community of gamers and NFT enthusiasts from around the world.</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Daily Tournaments</h3>
                <p className="text-gray-400 leading-relaxed">Compete in daily tournaments with varying skill levels and win exclusive rewards.</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">NFT Rewards</h3>
                <p className="text-gray-400 leading-relaxed">Earn exclusive NFT rewards and collectibles through gameplay and tournament victories.</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cross-Platform</h3>
                <p className="text-gray-400 leading-relaxed">Play seamlessly across all devices with our responsive and optimized gaming platform.</p>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Secure Gaming</h3>
                <p className="text-gray-400 leading-relaxed">Advanced blockchain security ensures fair play and secure transactions for all players.</p>
              </div>
            </div>
          </div>
          {/* Call to Action */}
          <div className="text-center py-20">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of players already enjoying our revolutionary gaming platform. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get Started Now
              </Link>
              <Link 
                to="/demo" 
                className="bg-transparent border-2 border-green-500 hover:bg-green-500 text-green-500 hover:text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>

       
    </>
  );
}