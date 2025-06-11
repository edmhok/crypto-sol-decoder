import logo from '../../assets/logo.png';

export default function Footer() {
    return (
      <>
        {/* Footer */}
        <footer className="relative z-10 bg-gray-900/50 border-t border-gray-800">
          <div className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between border-b border-gray-800 space-x-2 mb-6">
                  <img src={logo} alt="Crypto Oasis" className="h-12" />
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
                </div>
            <div className="grid justify-center grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8 py-2">
              {/* About Section */}
              <div className="lg:col-span-1">
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

            

            {/* Bottom Section */}
            <div className="border-t border-gray-800 py-3">
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
      </>
    );
  }