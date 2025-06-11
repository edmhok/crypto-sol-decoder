import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageMeta from '../../components/common/PageMeta';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.png';
import Features from './Features';
import Team from './Team';
import Roadmap from './Roadmap';
import FAQ from './FAQ';
import ConnectWalletButton from '../../components/wallet/ConnectWalletButton';
import { useWalletConnectModal } from '../../hooks/useWalletConnectModal';
import Footer from "./Footer";

const Home: React.FC = () => {
  const { openWalletModal, WalletConnectModalComponent, isConnected } = useWalletConnectModal();
  const navigate = useNavigate();

  // Redirect to dashboard if wallet is connected
  useEffect(() => {
    if (isConnected) {
      navigate('/dashboard');
    }
  }, [isConnected, navigate]);

  return (
    <>
      <PageMeta
        title="MultiGaming Platform for NFT Communities | Welcome"
        description="Join the ultimate gaming platform for NFT communities with poker, tournaments, and unique gaming experiences"
      />
      <WalletConnectModalComponent />
      
      {/* Public Landing Page */}
      <div className="relative min-h-screen bg-black overflow-hidden">
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 right-0 left-0 z-20 flex justify-between px-[50px] pt-3 bg-black/20 backdrop-blur-sm border-b border-gray-400/30">
          {/* Logo */}
          <div className="flex items-center pb-3">
            <a href="/dashboard" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" width="159px" height="53px" />
            </a>
            
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 mt-3">
            <a href="#about" className="h-[50px] text-white border-b-2 border-lime-500 hover:border-lime-400 transition-all duration-300 text-xl pb-1">
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
          <ConnectWalletButton onClick={openWalletModal} />
        </nav>

        

        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="text-center mt-30">
            <h1 className="text-6xl md:text-6xl font-bold text-white">
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
          <div className="relative">
            <img src={hero} alt="Hero Image" className="object-fill md:overflow-hidden" width="full" height="auto"/>
          </div>

          {/* Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/40 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-30 h-30 bg-purple-500/40 rounded-full blur-lg"></div>
        </div>

          {/* About Section */}
          <div className="text-center bg-gray-800 py-7">
            <h2 className="text-5xl font-bold text-white mb-6">Who are we?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            Crypto Oasis is a <span className="text-gray-300">multigaming platform for NFT communities</span> to come together, compete,
            and have fun. A big driving factor at Crypto Oasis is to help projects in the NFT space by 
            providing marketing and exposure through <span className="text-gray-300">branded games, collabing tournament style,</span> 
            and bringing back added value to everyone with the $CCCoin and access to The Lab.  
            </p>
          </div>

          <Features />
          <Roadmap />
          <Team />
          <FAQ />
          <Footer />
      </div>
      </div>
    </>
  );
};

export default Home;