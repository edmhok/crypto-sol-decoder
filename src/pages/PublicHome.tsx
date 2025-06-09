import { Link } from 'react-router';
import PageMeta from "../components/common/PageMeta";
import logo from '../assets/logo.png';
import hero from '../assets/hero.png';

export default function PublicHome() {
  return (
    <>
      <PageMeta
        title="MultiGaming Platform for NFT Communities | Welcome"
        description="Join the ultimate gaming platform for NFT communities with poker, tournaments, and unique gaming experiences"
      />
      
      {/* Public Landing Page */}
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Hero Background Image */}
        
        
        {/* Navigation Bar */}
        <nav className="relative w-[1920px] h-[70px] z-20 flex px-[50px] pt-3 bg-black/20 backdrop-blur-sm border-b border-gray-400/30">
          {/* Logo */}
          <div className="flex items-center pb-3">
            <a href="/dashboard" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" width="159px" height="53px" />
            </a>
            
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 mt-3 pl-[200px]">
            <a href="#about" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Who we are
            </a>
            <a href="#features" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Features
            </a>
            <a href="#roadmap" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Roadmap
            </a>
            <a href="#team" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              Team
            </a>
            <a href="#faq" className="h-[50px] text-white hover:border-b-2 hover:border-lime-500 transition-all duration-300 text-xl pb-1">
              FAQ
            </a>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center pl-[600px]">
            <div className="hidden lg:flex items-center space-x-3">
              {/* <Link 
                to="/signup" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
              >
                Connect Wallet
              </Link> */}
              
            </div>
          </div>
        </nav>

        

        {/* Main Content */}
        <div className="relative z-10 py-20">
          {/* Hero Section */}
          <div className="text-center mb-9">
            <h1 className="text-6xl md:text-6xl font-bold text-white mb-6">
              MultiGaming Platform for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-200">
                NFT Communities
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Crypto Oasis is a multigaming platform for NFT communities <br />
              to come together, compete, and have fun.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
              GET STARTED
            </button>
          </div>    
          <div className="relative mb-20">
            <img src={hero} alt="Hero Image" className="object-fill md:overflow-hidden" width="full" height="auto"/>
          </div>

          {/* Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/40 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-30 h-30 bg-purple-500/40 rounded-full blur-lg"></div>
          {/* <div className="absolute bottom-40 left-30 w-60 h-60 bg-green-800/50 rounded-full blur-2xl"></div> */}
          {/* <div className="absolute bottom-10 right-20 w-60 h-60 bg-green-800/50 rounded-full blur-2xl"></div> */}
        </div>

          {/* About Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Who are we?</h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto mb-8">
            Crypto Oasis is a <span className="text-gray-300">multigaming platform for NFT communities</span> to come together, compete, <br />
            and have fun. A big driving factor at Crypto Oasis is to help projects in the NFT space by <br />
            providing marketing and exposure through <span className="text-gray-300">branded games, collabing tournament style,</span> <br />
            and bringing back added value to everyone with the $CCCoin and access to The Lab.  
            </p>
          </div>

          {/* Features Grid */}
          <div className="pl-[50px] grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unique Gaming</h3>
              <p className="text-gray-400">Customize your experience with NFT assets and personalized gameplay.</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
              <p className="text-gray-400">Join a vibrant community of gamers and NFT enthusiasts.</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tournaments</h3>
              <p className="text-gray-400">Compete in daily tournaments with varying skill levels.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Gaming?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join thousands of players already enjoying our platform. Sign up now and get access to exclusive tournaments and NFT rewards.
            </p>
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Create Free Account
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 bg-gray-900/50 border-t border-gray-800 mt-20">
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <img src={logo} alt="Crypto Oasis" className="h-12" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-4">About Crypto Oasis</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Crypto Oasis is a multigaming platform for NFT communities to come together, compete, and have fun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                  GET STARTED
                </button>
              </div>

              {/* Section01 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Section01</h4>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
                  <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors text-sm">Roadmap</a></li>
                  <li><a href="#team" className="text-gray-400 hover:text-white transition-colors text-sm">Team</a></li>
                  <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
                </ul>
              </div>

              {/* Section02 */}
              <div>
                <h4 className="text-white font-semibold mb-4">Section02</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">$CCCoin</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Game Pass</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">NFT</a></li>
                </ul>
              </div>

              {/* Games */}
              <div>
                <h4 className="text-white font-semibold mb-4">Games</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Poker</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Bingo</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Skribbl</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Agar</a></li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-end mt-12 mb-8">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2022 Crypto Oasis. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Term of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}